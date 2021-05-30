import * as types from "./types";

const INITIAL_STATE = {
  usersList: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.USERS_RECIEVE:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
}
