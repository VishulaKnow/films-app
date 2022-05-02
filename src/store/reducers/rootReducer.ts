import { combineReducers } from "redux";
import { userReducer } from "./UserState";

//TODO: remove duplicate
export const rootReducer = combineReducers({
    user: userReducer
});
