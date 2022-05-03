import { combineReducers } from "redux";
import { filmsReducer } from "./FilmsState";
import { userReducer } from "./UserState";

export const rootReducer = combineReducers({
    user: userReducer,
    film: filmsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
