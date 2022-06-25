import { FilmTitle } from "../film/FilmPreview";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilms(filmTitle: FilmTitle) {
        return this.dbService.searchFilmsByTitle(filmTitle);
    }
}
