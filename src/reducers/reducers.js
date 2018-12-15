import { combineReducers } from "redux";
import todo from "./todoReducer.js";
import weather from "./weatherReducer.js";
// automagical mapping
export default combineReducers({ weather, todo });
