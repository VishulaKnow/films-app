import { combineReducers } from "redux";
import { filmsSearchReducer } from "./FilmsState";
import { userReducer } from "./UserState";

export const rootReducer = combineReducers({
    user: userReducer,
    filmSearch: filmsSearchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
