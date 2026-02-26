export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const MODIFY_POST = "MODIFY_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POSTS_LOADING = "SET_POSTS_LOADING";
export const SET_POSTS_ERROR = "SET_POSTS_ERROR";

export const SetPostsAction = function (posts) {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};

export const addPostAction = function (post) {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const modifyPostAction = function (post) {
  return {
    type: MODIFY_POST,
    payload: post,
  };
};

export const deletePostAction = function (postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

export const setPostsLoadingAction = function (isLoading) {
  return {
    type: SET_POSTS_LOADING,
    payload: isLoading,
  };
};

export const setPostsErrorAction = function (message) {
  return {
    type: SET_POSTS_ERROR,
    payload: message,
  };
};
