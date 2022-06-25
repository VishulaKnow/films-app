import { FilmTitle } from "../../../film/FilmPreview";
import { FileURL } from "../../types";

export type ImdbFilmId = string;

type ImdbRequestType = string;

type ImdbFilmTitle = FilmTitle;

export interface ImdbFilmItem {
    id: ImdbFilmId;
    resultType: ImdbRequestType;
    title: ImdbFilmTitle;
    image: FileURL;
}

export interface ImdbSearchResult {
    searchType: ImdbRequestType;
    expression: string;
    results: ImdbFilmItem[];
}
