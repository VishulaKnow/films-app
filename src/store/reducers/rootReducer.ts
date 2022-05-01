import { combineReducers } from "redux";
import { userReducer } from "./userState";

//TODO: remove duplicate
export const rootReducer = combineReducers({
    user: userReducer
});
