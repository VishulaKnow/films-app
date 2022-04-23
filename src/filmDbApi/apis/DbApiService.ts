import { Film, FilmName } from "../../film/film";

export interface DbApiService {
    searchFirstFilm(filmName: FilmName): Promise<Film | null>;
}
