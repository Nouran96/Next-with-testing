import * as types from "./types";

export const saveLoginType = (payload) => ({
  type: types.SAVE_LOGIN_DATA,
  payload,
});
