import { FilmId } from "../../../film/FilmPreview";
import { Fetcher } from "../../Fetcher";
import { DbApiService } from "../DbApiService";
import { ImdbFilmTransformator } from "./imdbItemToFilm";
import { ImdbFilm, ImdbSearchResult } from "./ImdbResult";
import { ImdbUrlGenerator } from "./ImdbUrlGenerator";

export class ImdbApiService implements DbApiService {
    constructor(private urlGenerator: ImdbUrlGenerator) {}

    async searchFilmsByTitle(filmTitle: string) {
        const url = this.urlGenerator.generateSearchFilmUrl(filmTitle);
        const result = await Fetcher.sendRequest<ImdbSearchResult>(url);

        if (!result?.results?.length) return [];

        return result.results.map((r) => ImdbFilmTransformator.getFilmPreviewFromImdb(r));
    }

    async fetchFilm(id: FilmId) {
        const url = this.urlGenerator.generateFetchFilmUrl(id);
        const result = await Fetcher.sendRequest<ImdbFilm>(url);

        if (!result) return null;

        return ImdbFilmTransformator.getFilmFromImdbFilm(result);
    }
}
