import { FilmId, FilmTitle } from "../film/FilmPreview";
import { DbApiService } from "./apis/DbApiService";

export class ApiService {
    constructor(private dbService: DbApiService) {}

    searchFilms(filmTitle: FilmTitle) {
        return this.dbService.searchFilmsByTitle(filmTitle);
    }

    fetchFilm(id: FilmId) {
        return this.dbService.fetchFilm(id);
    }

    fetchReviews(id: FilmId) {
        return this.dbService.fetchReviews(id);
    }
}
