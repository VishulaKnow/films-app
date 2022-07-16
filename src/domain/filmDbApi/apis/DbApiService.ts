import { Film } from "../../film/Film";
import { FilmId, FilmPreview, FilmTitle } from "../../film/FilmPreview";
import { FilmReview } from "../../review/FilmReview";

export interface DbApiService {
    searchFilmsByTitle(filmTitle: FilmTitle): Promise<FilmPreview[]>;
    fetchFilm(id: FilmId): Promise<Film | null>;
    fetchReviews(id: FilmId): Promise<FilmReview[]>;
}
