import { FilmName } from "../../../film/film";

type ImdbFilmId = string;

type ImdbRequestType = string;

type ImdbFilmName = FilmName;

interface ImdbFilmsResult {
    id: ImdbFilmId;
    resultType: ImdbRequestType;
    title: ImdbFilmName;
}

export interface ImdbSearchResult {
    searchType: ImdbRequestType;
    expression: string;
    results: ImdbFilmsResult[];
}
