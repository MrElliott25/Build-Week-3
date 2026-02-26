import { SET_USER, LOGOUT_USER } from "../actions/actions";

const initialState = {
  user: {
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  },
};

export const userReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };

    case LOGOUT_USER:
      return initialState;

    default:
      return currentState;
  }
};
