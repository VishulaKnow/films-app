import { Film } from "../../../film/Film";
import { ImdbFilmId, ImdbFilmItem } from "./ImdbResult";

export const ImdbFilmTransformator = new (class {
    getFilmFromImdb(imdbFilmResult: ImdbFilmItem): Film {
        return new Film({
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
