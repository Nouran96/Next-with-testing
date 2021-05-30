import * as types from "./types";

const INITIAL_STATE = {
  usersList: [],
  userDetails: {},
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USERS_RECIEVE:
      return {
        ...state,
        usersList: action.payload,
      };
    case types.USER_DETAILS_RECIEVE:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
}
