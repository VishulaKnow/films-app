import { Film, FilmName } from "../../film/Film";

export interface DbApiService {
    searchFirstFilm(filmName: FilmName): Promise<Film | null>;
}
