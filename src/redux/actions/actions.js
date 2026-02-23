export const SET_USER = "SET_USER";

export const setUserAction = function (user) {
  console.log("SONO L'AZIONE SET USER!");

  return {
    type: SET_USER,
    payload: user,
  };
};
