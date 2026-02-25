import { SET_POSTS, ADD_POST, MODIFY_POST, DELETE_POST, SET_POSTS_LOADING, SET_POSTS_ERROR } from "../actions/postsActions";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...currentState,
        content: action.payload,
        error: null,
      };

    case ADD_POST:
      return {
        ...currentState,
        content: [action.payload, ...currentState.content],
      };

    case MODIFY_POST:
      return {
        ...currentState,
        content: currentState.content.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };

    case DELETE_POST:
      return {
        ...currentState,
        content: currentState.content.filter((post) => post._id !== action.payload),
      };

    case SET_POSTS_LOADING:
      return {
        ...currentState,
        isLoading: action.payload,
      };

    case SET_POSTS_ERROR:
      return {
        ...currentState,
        error: action.payload,
      };

    default:
      return currentState;
  }
};
