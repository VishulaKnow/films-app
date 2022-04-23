import { FilmName } from "../film/film";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilm(filmName: FilmName) {
        return this.dbService.searchFirstFilm(filmName);
    }
}
