import { Button, Col, Image, Row } from "react-bootstrap";
import { ArrowRepeat, ChatText, HandThumbsUp, HandThumbsUpFill, HeartFill, LightbulbFill, Pencil, PersonFillAdd, Send, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction } from "../../redux/actions/postsActions";
import { deletePost } from "../../utils/postsFetch";
import CommentList from "./CommentList";
import { useState } from "react";

const SinglePost = function (props) {
  const comments = useSelector((currentState) => currentState.comments.content);

  let commentsForThisPost = [];

  if (comments && props.postID) {
    commentsForThisPost = comments.filter((comment) => comment.elementId === props.postID);
  }

  const [showComments, setShowComments] = useState(false);

  const toggleComments = function () {
    setShowComments(!showComments);
  };

  const dispatch = useDispatch();
  const ImagePH = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

  const MY_USER_ID = "699c35b30bc1de001577b7b2";

  let ownerId = null;

  if (props.post.user) {
    if (typeof props.post.user === "string") {
      ownerId = props.post.user;
    } else {
      ownerId = props.post.user._id;
    }
  }

  const isMyPost = ownerId === MY_USER_ID;

  const handleDelete = function () {
    deletePost(props.postsAPI, props.post._id)
      .then(() => {
        dispatch(deletePostAction(props.post._id));
      })
      .catch((err) => {
        alert("Errore: " + err.message);
      });
  };

  const handleEdit = function () {
    if (!props.onEdit) return;
    props.onEdit(props.post);
  };

  return (
    <div className=" px-2 py-3 p-md-3 rounded border border-black border-opacity-10 w-100 mt-4 shadow-sm">
      <div className=" d-flex mb-3 justify-content-end gap-3">
        <p className=" mb-0 me-auto text-muted">Pubblicato: {props.post.updatedAt ? props.post.updatedAt.slice(0, 10) : "-"}</p>
        {isMyPost && (
          <>
            <Button className="p-0" variant="light" size="sm" onClick={handleEdit}>
              <Pencil size={20} />
            </Button>
            <Button className="p-0" variant="light" size="sm" onClick={handleDelete}>
              <X size={20} />
            </Button>
          </>
        )}
      </div>

      {/* Strip Utente */}
      <Row className="g-0 g-lg-2">
        <Col xs="2">
          <Image
            roundedCircle
            src={props.post.user.image ? props.post.user.image : ImagePH}
            style={{ maxHeight: "60px", maxWidth: "60px", objectFit: "cover", aspectRatio: 1 }}
          />
        </Col>
        <Col xs="6" className=" d-flex flex-column p-0" style={{ minWidth: 0 }}>
          <h4 className="mb-0 text-break">
            {props.post.user.name && props.post.user.surname ? props.post.user.name + " " + props.post.user.surname : props.post.username}
          </h4>
          <p className="mb-0 text-muted" style={{ fontSize: "0.8rem" }}>
            {props.post.user.title ? props.post.user.title : "Generic User"}
          </p>
        </Col>
        <Col xs="4" className="px-0 d-flex justify-content-end align-items-start">
          <Button variant="light" className=" d-flex gap-2 text-primary fw-bold">
            <PersonFillAdd size={20} /> Collegati
          </Button>
        </Col>
      </Row>
      {/* Fine Strip Utente */}

      {/* Post Text */}
      <div className=" mb-5 mt-3 px-1">
        <p className="mb-0" style={{ fontSize: "1.1rem" }}>
          {props.post.text}
        </p>
      </div>

      <div className=" d-flex justify-content-between align-items-center px-2">
        <div className=" d-flex align-items-center">
          <HandThumbsUpFill size={15} className=" text-primary" />
          <HeartFill size={15} className=" text-danger" />
          <LightbulbFill size={15} className=" text-warning" />
          <p className="mb-0 ms-2">71</p>
        </div>

        <div className=" d-flex align-items-center">
          {commentsForThisPost.length > 0 ? (
            <>
              <p className="mb-0 d-flex gap-1" style={{ fontSize: "0.9rem" }}>
                <span>
                  {commentsForThisPost.length} {commentsForThisPost.length === 1 ? "Commento" : "Commenti"}
                </span>
                <span> &bull; </span>
                <span>{commentsForThisPost.length * 5} diffusioni post </span>
              </p>
            </>
          ) : (
            <p className="mb-0">Nessun commento</p>
          )}
        </div>
      </div>

      <hr style={{ opacity: "0.1" }} />

      <div className=" d-flex justify-content-evenly">
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <HandThumbsUp />
          <p className=" mb-0"> Consiglia</p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center" onClick={toggleComments}>
          <ChatText />
          <p className=" mb-0"> Commenta</p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <ArrowRepeat />
          <p className=" mb-0"> Diffondi il post </p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <Send />
          <p className=" mb-0">Invia</p>
        </Button>
      </div>

      {showComments && (
        <div className="mt-3">
          <CommentList postID={props.post._id} commentsForThisPost={commentsForThisPost} />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
