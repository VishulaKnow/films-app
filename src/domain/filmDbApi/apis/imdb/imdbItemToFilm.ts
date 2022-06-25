import { Film } from "../../../film/Film";
import { FilmPreview } from "../../../film/FilmPreview";
import { ImdbFilm, ImdbFilmId, ImdbFilmPreviewItem } from "./ImdbResult";

export const ImdbFilmTransformator = new (class {
    getFilmPreviewFromImdb(imdbFilmsPreviewsResult: ImdbFilmPreviewItem): FilmPreview {
        return new FilmPreview({
            id: imdbFilmsPreviewsResult.id,
            title: imdbFilmsPreviewsResult.title,
            imageUrl: imdbFilmsPreviewsResult.image,
            subtitle: this.getFilmSubtitle(imdbFilmsPreviewsResult.id)
        });
    }

    getFilmFromImdbFilm(imdbFilmResult: ImdbFilm): Film {
        return new Film({
            id: imdbFilmResult.id,
            title: imdbFilmResult.title,
            imageUrl: imdbFilmResult.image,
            directors: imdbFilmResult.directors,
            fullTitle: imdbFilmResult.fullTitle,
            plot: imdbFilmResult.plot,
            releaseYear: imdbFilmResult.year
        });
    }

    private getFilmSubtitle(filmId: ImdbFilmId) {
        return `${filmId} (IMDB)`;
    }
})();
