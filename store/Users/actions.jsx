import * as types from "./types";

export const fetchUsers = (payload) => ({
  type: types.FETCH_USERS,
  payload,
});

export const usersRecieve = (payload) => ({
  type: types.USERS_RECIEVE,
  payload,
});
