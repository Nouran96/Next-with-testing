import * as types from "./types";

const INITIAL_STATE = {
  user:
    typeof Storage !== "undefined"
      ? JSON.parse(localStorage.getItem("user_testing"))
      : {},
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SAVE_LOGIN_DATA:
      if (typeof Storage !== "undefined")
        localStorage.setItem("user_testing", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
