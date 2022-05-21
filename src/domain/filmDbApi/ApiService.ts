import { FilmTitle } from "../film/Film";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilms(filmTitle: FilmTitle) {
        return this.dbService.searchFilmsByTitle(filmTitle);
    }
}
