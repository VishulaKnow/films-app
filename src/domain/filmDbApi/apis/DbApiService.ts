import { Film, FilmTitle } from "../../film/Film";

export interface DbApiService {
    searchFirstFilm(filmName: FilmTitle): Promise<Film | null>;
}
