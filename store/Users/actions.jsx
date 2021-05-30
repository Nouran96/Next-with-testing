import * as types from "./types";

export const fetchUsers = (payload) => ({
  type: types.FETCH_USERS,
  payload,
});

export const usersRecieve = (payload) => ({
  type: types.USERS_RECIEVE,
  payload,
});

export const fetchUserDetails = (payload) => ({
  type: types.FETCH_USER_DETAILS,
  payload,
});

export const userDetailsRecieve = (payload) => ({
  type: types.USER_DETAILS_RECIEVE,
  payload,
});
