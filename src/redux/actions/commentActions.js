export const SET_COMMENTS = "SET_COMMENTS";
export const SET_COMMENTS_LOADING = "SET_COMMENTS_LOADING";
export const SET_COMMENTS_ERROR = "SET_COMMENTS_ERROR";
export const ADD_COMMENT = "ADD_COMMENT";
export const MODIFY_COMMENT = "MODIFY_COMMENT";
export const DELETE_COMMENT = "DELETE_CONTENT";

export const setCommentsAction = function (comments) {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const setCommentsLoadingAction = function (value) {
  return {
    type: SET_COMMENTS_LOADING,
    payload: value,
  };
};

export const setCommentsErrorAction = function (message) {
  return {
    type: SET_COMMENTS_ERROR,
    payload: message,
  };
};

export const addCommentAction = function (comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const modifyCommentAction = function (comment) {
  return {
    type: MODIFY_COMMENT,
    payload: comment,
  };
};

export const deleteCommentAction = function (commentId) {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
};
