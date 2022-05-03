import { Dispatch } from "react";
import { Action } from "redux";
import { Film, FilmTitle } from "../../domain/film/Film";
import { ImdbApiService } from "../../domain/filmDbApi/apis/imdb/ImdbApiService";
import { ImdbUrlGenerator } from "../../domain/filmDbApi/apis/imdb/ImdbUrlGenerator";
import { ApiService } from "../../domain/filmDbApi/ApiService";
import { User } from "../../domain/user/User";

interface FilmsState {
    filmList: Film[];
}

const initialState: FilmsState = {
    filmList: null
};

type FilmsActionType = "FETCH_LIST";

interface FetchFilmsAction extends Action<FilmsActionType> {
    type: "FETCH_LIST";
    payload: Film[];
}

type FilmsAction = FetchFilmsAction;

export function filmsReducer(state = initialState, action: FilmsAction): FilmsState {
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

        // add error catch
        const film = await apiService.searchFilm(title);
        dispatch({ type: "FETCH_LIST", payload: [film] });
    };
}
