import { FilmName } from "../film/Film";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilm(filmName: FilmName) {
        return this.dbService.searchFirstFilm(filmName);
    }
}
