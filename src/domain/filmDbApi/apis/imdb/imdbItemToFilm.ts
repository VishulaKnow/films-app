import { FilmPreview } from "../../../film/FilmPreview";
import { ImdbFilmId, ImdbFilmItem } from "./ImdbResult";

export const ImdbFilmTransformator = new (class {
    getFilmFromImdb(imdbFilmResult: ImdbFilmItem): FilmPreview {
        return new FilmPreview({
            id: imdbFilmResult.id,
            title: imdbFilmResult.title,
            imageUrl: imdbFilmResult.image,
            subtitle: this.getFilmSubtitle(imdbFilmResult.id)
        });
    }

    private getFilmSubtitle(filmId: ImdbFilmId) {
        return `${filmId} (IMDB)`;
    }
})();
