import { FilmDirectors, FilmFullTitle, FilmPlot, FilmReleaseYear, FilmTitle } from "../../../film/FilmPreview";
import { FileURL } from "../../types";

export type ImdbFilmId = string;

type ImdbRequestType = string;

type ImdbFilmTitle = FilmTitle;
type ImdbFilmFullTitle = FilmFullTitle;
type ImdbFilmReleaseYear = FilmReleaseYear;
type ImdbFilmPlot = FilmPlot;
type ImdbFilmDirectors = FilmDirectors;

export interface ImdbFilmPreviewItem {
    id: ImdbFilmId;
    resultType: ImdbRequestType;
    title: ImdbFilmTitle;
    image: FileURL;
}

export interface ImdbSearchResult {
    searchType: ImdbRequestType;
    expression: string;
    results: ImdbFilmPreviewItem[];
}

export interface ImdbFilm {
    id: ImdbFilmId;
    title: ImdbFilmTitle;
    fullTitle: ImdbFilmFullTitle;
    year: ImdbFilmReleaseYear;
    image: FileURL;
    plot: ImdbFilmPlot;
    directors: ImdbFilmDirectors;
}
