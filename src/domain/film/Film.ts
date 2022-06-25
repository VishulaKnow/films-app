import { FileURL } from "../filmDbApi/types";
import { FilmDirectors, FilmFullTitle, FilmId, FilmPlot, FilmReleaseYear, FilmTitle } from "./FilmPreview";

interface FilmConfig {
    id: FilmId;
    title: FilmTitle;
    fullTitle: FilmFullTitle;
    imageUrl: FileURL;
    releaseYear: FilmReleaseYear;
    plot: FilmPlot;
    directors: FilmDirectors;
}

export class Film {
    constructor(private config: FilmConfig) {}

    get id() {
        return this.config.id;
    }

    get title() {
        return this.config.title;
    }

    get imageUrl() {
        return this.config.imageUrl;
    }

    get fullTitle() {
        return this.config.fullTitle;
    }

    get releaseYear() {
        return this.config.releaseYear;
    }

    get plot() {
        return this.config.plot;
    }

    get directors() {
        return this.config.directors;
    }
}
