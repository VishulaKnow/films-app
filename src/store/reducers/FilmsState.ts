import { Dispatch } from "react";
import { Action } from "redux";
import { FilmPreview, FilmTitle } from "../../domain/film/Film";
import { ImdbApiService } from "../../domain/filmDbApi/apis/imdb/ImdbApiService";
import { ImdbUrlGenerator } from "../../domain/filmDbApi/apis/imdb/ImdbUrlGenerator";
import { ApiService } from "../../domain/filmDbApi/ApiService";
import { User } from "../../domain/user/User";

interface FilmsSearchState {
    filmList: FilmPreview[] | null;
    fetchInProgress: boolean;
}

const initialState: FilmsSearchState = {
    filmList: null,
    fetchInProgress: false
};

type FilmsActionType = "FETCH_LIST" | "START_FETCH" | "END_FETCH";

interface FetchFilmsAction extends Action<FilmsActionType> {
    type: "FETCH_LIST";
    payload: FilmPreview[];
}

interface StartFetchAction extends Action<FilmsActionType> {
    type: "START_FETCH";
}

interface EndFetchAction extends Action<FilmsActionType> {
    type: "END_FETCH";
}

type FilmsAction = FetchFilmsAction | StartFetchAction | EndFetchAction;

export function filmsSearchReducer(state = initialState, action: FilmsAction): FilmsSearchState {
    if (action.type === "FETCH_LIST") {
        return { ...state, filmList: action.payload };
    }
    if (action.type === "START_FETCH") {
        return { ...state, fetchInProgress: true };
    }
    if (action.type === "END_FETCH") {
        return { ...state, fetchInProgress: false };
    }

    return state;
}

export function fetchFilmsListAction(title: FilmTitle, user: User | null) {
    if (!user) throw new Error("User not found!");

    return async (dispatch: Dispatch<FilmsAction>) => {
        const dbService = new ImdbApiService(new ImdbUrlGenerator(user.apiKey));
        const apiService = new ApiService(dbService);

        dispatch({ type: "START_FETCH" });

        //TODO: add error catch
        const films = await apiService.searchFilms(title);
        dispatch({ type: "END_FETCH" });
        dispatch({ type: "FETCH_LIST", payload: films });
    };
}
