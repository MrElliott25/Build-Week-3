export const SET_COMMENTS = "SET_COMMENTS";
export const SET_COMMENTS_LOADING = "SET_COMMENTS_LOADING";
export const SET_COMMENTS_ERROR = "SET_COMMENTS_ERROR";
export const ADD_COMMENT = "ADD_COMMENT";

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
