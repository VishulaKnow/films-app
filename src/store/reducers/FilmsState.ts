import { Dispatch } from "react";
import { Action } from "redux";
import { Film } from "../../domain/film/Film";
import { FilmId, FilmPreview, FilmTitle } from "../../domain/film/FilmPreview";
import { ImdbApiService } from "../../domain/filmDbApi/apis/imdb/ImdbApiService";
import { ImdbUrlGenerator } from "../../domain/filmDbApi/apis/imdb/ImdbUrlGenerator";
import { ApiService } from "../../domain/filmDbApi/ApiService";
import { User } from "../../domain/user/User";

interface FilmsSearchState {
    currentFilm: Film | undefined | null;
    filmList: FilmPreview[] | null;
    fetchInProgress: boolean;
}

const initialState: FilmsSearchState = {
    currentFilm: void 0,
    filmList: null,
    fetchInProgress: false
};

type FilmsActionType = "FETCH_LIST" | "FETCH" | "START_FETCH" | "END_FETCH";

interface FetchFilmsAction extends Action<FilmsActionType> {
    type: "FETCH_LIST";
    payload: FilmPreview[];
}

interface FetchFilmAction extends Action<FilmsActionType> {
    type: "FETCH";
    payload: Film | null;
}

interface StartFetchAction extends Action<FilmsActionType> {
    type: "START_FETCH";
}

interface EndFetchAction extends Action<FilmsActionType> {
    type: "END_FETCH";
}

type FilmsAction = FetchFilmsAction | FetchFilmAction | StartFetchAction | EndFetchAction;

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
    if (action.type === "FETCH") {
        return { ...state, currentFilm: action.payload };
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

export function fetchFilmAction(id: FilmId, user: User | null) {
    if (!user) throw new Error("User not found!");

    return async (dispatch: Dispatch<FilmsAction>) => {
        const dbService = new ImdbApiService(new ImdbUrlGenerator(user.apiKey));
        const apiService = new ApiService(dbService);

        dispatch({ type: "START_FETCH" });

        const film = await apiService.fetchFilm(id);
        dispatch({ type: "END_FETCH" });
        dispatch({ type: "FETCH", payload: film });
    };
}
