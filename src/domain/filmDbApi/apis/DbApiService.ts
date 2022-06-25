import { Film } from "../../film/Film";
import { FilmId, FilmPreview, FilmTitle } from "../../film/FilmPreview";

export interface DbApiService {
    searchFilmsByTitle(filmTitle: FilmTitle): Promise<FilmPreview[]>;
    fetchFilm(id: FilmId): Promise<Film | null>;
}
