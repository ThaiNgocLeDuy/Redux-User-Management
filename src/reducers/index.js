import { combineReducers } from "redux";
import userReducers from "./UserReducers";

const rootReducer = combineReducers({
  users: userReducers,
});

export default rootReducer;
