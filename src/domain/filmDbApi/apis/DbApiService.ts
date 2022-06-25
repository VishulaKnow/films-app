import { FilmPreview, FilmTitle } from "../../film/FilmPreview";

export interface DbApiService {
    searchFilmsByTitle(filmTitle: FilmTitle): Promise<FilmPreview[]>;
}
