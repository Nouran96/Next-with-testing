import { all } from "redux-saga/effects";
import { usersSaga } from "./Users/sagas";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
