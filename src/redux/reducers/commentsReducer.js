import { SET_COMMENTS, SET_COMMENTS_LOADING, SET_COMMENTS_ERROR, ADD_COMMENT } from "../actions/commentActions";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

export const commentsReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...currentState,
        content: action.payload,
      };

    case SET_COMMENTS_LOADING:
      return {
        ...currentState,
        isLoading: action.payload,
      };

    case SET_COMMENTS_ERROR:
      return {
        ...currentState,
        error: action.payload,
      };

    case ADD_COMMENT:
      return {
        ...currentState,
        content: [action.payload, ...currentState.content],
      };

    default:
      return currentState;
  }
};
