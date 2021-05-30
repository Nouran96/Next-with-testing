import { combineReducers } from "redux";
import auth from "./Auth/reducer";
import users from "./Users/reducer";

export default combineReducers({
  auth,
  users,
});
