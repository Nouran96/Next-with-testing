import * as types from "./types";

export const saveLoginType = (payload) => ({
  type: types.SAVE_LOGIN_DATA,
  payload,
});

export const logout = (payload) => ({
  type: types.LOGOUT,
  payload,
});
