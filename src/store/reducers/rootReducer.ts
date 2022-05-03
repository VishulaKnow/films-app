import { combineReducers } from "redux";
import { userReducer } from "./UserState";

export const rootReducer = combineReducers({
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
