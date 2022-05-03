import { FilmTitle } from "../../../film/Film";
import { FileURL } from "../../types";

export type ImdbFilmId = string;

type ImdbRequestType = string;

type ImdbFilmName = FilmTitle;

export interface ImdbFilmItem {
    id: ImdbFilmId;
    resultType: ImdbRequestType;
    title: ImdbFilmName;
    image: FileURL;
}

export interface ImdbSearchResult {
    searchType: ImdbRequestType;
    expression: string;
    results: ImdbFilmItem[];
}
