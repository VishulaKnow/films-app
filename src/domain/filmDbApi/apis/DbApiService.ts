import { Film, FilmTitle } from "../../film/Film";

export interface DbApiService {
    searchFilmsByTitle(filmTitle: FilmTitle): Promise<Film[]>;
}
