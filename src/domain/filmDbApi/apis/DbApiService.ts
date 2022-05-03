import { Film, FilmTitle } from "../../film/Film";

export interface DbApiService {
    searchFirstFilm(filmTitle: FilmTitle): Promise<Film | null>;
}
