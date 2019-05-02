import appReducer from "./app";
import { combineReducers } from "redux";

export default combineReducers({ app: appReducer });
