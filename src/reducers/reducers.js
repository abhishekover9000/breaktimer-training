import { combineReducers } from "redux";
import todo from "./todoReducer.js";
import weather from "./weatherReducer.js";
import config from "./configReducer.js";
import timerInfo from "./timerReducer";
// automagical mapping
export default combineReducers({ weather, todo, config,timerInfo });
