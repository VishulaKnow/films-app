import { Film } from "../../../film/film";
import { Fetcher } from "../../Fetcher";
import { DbApiService } from "../DbApiService";
import { ImdbSearchResult } from "./ImdbResult";
import { ImdbUrlGenerator } from "./ImdbUrlGenerator";

export class ImdbApiService implements DbApiService {
    constructor(private urlGenerator: ImdbUrlGenerator) {}

    async searchFirstFilm(filmName: string) {
        const url = this.urlGenerator.generateSearchFilmUrl(filmName);
        const result = await Fetcher.sendRequest<ImdbSearchResult>(url);

        console.log(result);

        if (!result?.results?.length) return null;

        const firstFilm = result.results[0];
        return new Film({
            name: firstFilm.title
        });
    }
}
