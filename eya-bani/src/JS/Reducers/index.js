import { combineReducers } from "redux";
import userReducer from "./UserReducers";
import ProductReducer from "./ProductReducers";
const rootReducer = combineReducers({ userReducer, ProductReducer });
export default rootReducer;
