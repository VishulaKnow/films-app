import { Dispatch } from "react";
import { Action } from "redux";
import { Film, FilmTitle } from "../../domain/film/Film";
import { ImdbApiService } from "../../domain/filmDbApi/apis/imdb/ImdbApiService";
import { ImdbUrlGenerator } from "../../domain/filmDbApi/apis/imdb/ImdbUrlGenerator";
import { ApiService } from "../../domain/filmDbApi/ApiService";
import { User } from "../../domain/user/User";

interface FilmsSearchState {
    filmList: Film[];
}

const initialState: FilmsSearchState = {
    filmList: null
};

type FilmsActionType = "FETCH_LIST";

interface FetchFilmsAction extends Action<FilmsActionType> {
    type: "FETCH_LIST";
    payload: Film[];
}

type FilmsAction = FetchFilmsAction;

export function filmsSearchReducer(state = initialState, action: FilmsAction): FilmsSearchState {
    if (action.type === "FETCH_LIST") {
        return { ...state, filmList: action.payload };
    }

    return state;
}

export function fetchFilmsListAction(title: FilmTitle, user: User) {
    if (!user) throw new Error("User not found!");

    return async (dispatch: Dispatch<FilmsAction>) => {
        const dbService = new ImdbApiService(new ImdbUrlGenerator(user.apiKey));
        const apiService = new ApiService(dbService);

        //TODO: add error catch
        const films = await apiService.searchFilms(title);
        dispatch({ type: "FETCH_LIST", payload: films });
    };
}
