import { FilmPreview, FilmTitle } from "../../film/Film";

export interface DbApiService {
    searchFilmsByTitle(filmTitle: FilmTitle): Promise<FilmPreview[]>;
}
