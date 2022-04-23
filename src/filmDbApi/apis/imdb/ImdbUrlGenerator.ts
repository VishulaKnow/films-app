import { FilmName } from "../../../film/film";
import { ApiKey } from "../../ApiKey";

export class ImdbUrlGenerator {
    private readonly ruLanguageCode = "ru";
    private HOST_NAME = `https://imdb-api.com/${this.ruLanguageCode}/API`;

    constructor(private apiKey: ApiKey) {}

    generateSearchFilmUrl(filmName: FilmName) {
        return `${this.HOST_NAME}/Search/${this.apiKey}/${filmName}`;
    }
}
