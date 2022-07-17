import { Dispatch } from "react";
import { Action } from "redux";
import { Film } from "../../domain/film/Film";
import { FilmId, FilmPreview, FilmTitle } from "../../domain/film/FilmPreview";
import { FakeApiService } from "../../domain/filmDbApi/apis/fake/FakeApiService";
import { ApiService } from "../../domain/filmDbApi/ApiService";
import { FilmReview } from "../../domain/review/FilmReview";
import { User } from "../../domain/user/User";

interface CurrentFilmInfo {
    film: Film;
    reviews: FilmReview[];
}

interface FilmsSearchState {
    currentFilm: CurrentFilmInfo | undefined | null;
    filmList: FilmPreview[] | null;
    fetchInProgress: boolean;
}

const initialState: FilmsSearchState = {
    currentFilm: void 0,
    filmList: null,
    fetchInProgress: false
};

type FilmsActionType = "FETCH_LIST" | "FETCH" | "START_FETCH" | "END_FETCH" | "CLEAR_LIST";

interface FetchFilmsAction extends Action<FilmsActionType> {
    type: "FETCH_LIST";
    payload: FilmPreview[];
}

interface FetchFilmAction extends Action<FilmsActionType> {
    type: "FETCH";
    payload: CurrentFilmInfo | null;
}

interface StartFetchAction extends Action<FilmsActionType> {
    type: "START_FETCH";
}

interface EndFetchAction extends Action<FilmsActionType> {
    type: "END_FETCH";
}

interface ClearListAction extends Action<FilmsActionType> {
    type: "CLEAR_LIST";
}

type FilmsAction = FetchFilmsAction | FetchFilmAction | StartFetchAction | EndFetchAction | ClearListAction;

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
    if (action.type === "CLEAR_LIST") {
        return { ...state, filmList: [] };
    }

    return state;
}

export function fetchFilmsListAction(title: FilmTitle, user: User | null) {
    if (!user) throw new Error("User not found!");

    return async (dispatch: Dispatch<FilmsAction>) => {
        const apiService = getApiService(user);

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
        const apiService = getApiService(user);

        dispatch({ type: "START_FETCH" });

        const end = (result: CurrentFilmInfo | null) => {
            dispatch({ type: "END_FETCH" });
            dispatch({ type: "FETCH", payload: result });
        };

        const film = await apiService.fetchFilm(id);

        if (!film) {
            end(null);
            return;
        }

        const reviews = await apiService.fetchReviews(id);

        end({ film, reviews });
    };
}

function getApiService(user: User) {
    user;
    // const dbService = new ImdbApiService(new ImdbUrlGenerator(user.apiKey));
    const dbService = new FakeApiService({ timeout: { min: 1000, max: 4000 } });
    return new ApiService(dbService);
}

export function clearSearchResultAction(): ClearListAction {
    return {
        type: "CLEAR_LIST"
    };
}
