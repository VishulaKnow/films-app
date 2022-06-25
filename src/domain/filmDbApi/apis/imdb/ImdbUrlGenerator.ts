import { FilmTitle } from "../../../film/FilmPreview";
import { ApiKey } from "../../../types";

export class ImdbUrlGenerator {
    private readonly ruLanguageCode = "ru";
    private HOST_NAME = `https://imdb-api.com/${this.ruLanguageCode}/API`;

    constructor(private apiKey: ApiKey) {}

    generateSearchFilmUrl(filmTitle: FilmTitle) {
        return `${this.HOST_NAME}/Search/${this.apiKey}/${filmTitle}`;
    }
}
