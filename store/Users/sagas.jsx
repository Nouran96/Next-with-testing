import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "./types";
import * as api from "./api";
import * as actions from "./actions";

function* fetchUsers() {
  try {
    const response = yield call(api.fetchUsers);
    yield put(actions.usersRecieve(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* usersSaga() {
  yield takeLatest(types.FETCH_USERS, fetchUsers);
}
