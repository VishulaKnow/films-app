import { FilmTitle } from "../film/Film";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilm(filmTitle: FilmTitle) {
        return this.dbService.searchFirstFilm(filmTitle);
    }
}
