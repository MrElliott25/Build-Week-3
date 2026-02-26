import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Alert } from "react-bootstrap";
import SinglePost from "./SinglePost";
import NewPostSection from "./NewPostSection";
import CreatePost from "./CreatePost";

import { fetchPosts } from "../../utils/postsFetch";
import { SetPostsAction, setPostsLoadingAction, setPostsErrorAction } from "../../redux/actions/postsActions";
import { fetchComments } from "../../utils/fetch";
import { setCommentsAction, setCommentsLoadingAction, setCommentsErrorAction } from "../../redux/actions/commentActions";
import EditPost from "./EditPost";

const POSTS_API = "https://striveschool-api.herokuapp.com/api/posts";

const HomepageFrontBanner = function () {
  const dispatch = useDispatch();

  const posts = useSelector((currentState) => {
    return currentState.posts.content;
  });

  const isLoading = useSelector((currentState) => {
    return currentState.posts.isLoading;
  });

  const error = useSelector((currentState) => {
    return currentState.posts.error;
  });

  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);

  const openEdit = function (post) {
    setPostToEdit(post);
    setShowEdit(true);
  };

  // post UseEffect
  useEffect(() => {
    dispatch(setPostsLoadingAction(true));

    fetchPosts(POSTS_API)
      .then((data) => {
        const limitedPosts = data.slice(50, 80);
        dispatch(SetPostsAction(limitedPosts));
        dispatch(setPostsErrorAction(null));

        dispatch(setPostsLoadingAction(false));
      })
      .catch((err) => {
        dispatch(setPostsErrorAction(err.message));
        dispatch(setPostsLoadingAction(false));
      });
  }, [dispatch]);

  // comments UseEffect
  useEffect(() => {
    dispatch(setCommentsLoadingAction(true));

    fetchComments()
      .then((data) => {
        dispatch(setCommentsAction(data));
        dispatch(setCommentsErrorAction(null));
        dispatch(setCommentsLoadingAction(false));
      })
      .catch((err) => {
        dispatch(setCommentsErrorAction(err.message));
        dispatch(setCommentsLoadingAction(false));
      });
  }, [dispatch]);

  console.log("POSTS in Redux:", posts);
  return (
    <div className="d-flex flex-column align-items-center">
      <NewPostSection onOpen={() => setShowModal(true)} postsAPI={POSTS_API} />
      <CreatePost show={showModal} onClose={() => setShowModal(false)} postsAPI={POSTS_API} />
      <EditPost show={showEdit} onClose={() => setShowEdit(false)} post={postToEdit} postsAPI={POSTS_API} />

      {isLoading && <Spinner className="my-5" animation="grow" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {posts.map((post) => {
        return <SinglePost key={post._id} post={post} postsAPI={POSTS_API} onEdit={openEdit} postID={post._id} />;
      })}
    </div>
  );
};

export default HomepageFrontBanner;
