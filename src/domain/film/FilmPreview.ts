import { FileURL } from "../filmDbApi/types";

export type FilmTitle = string;
export type FilmFullTitle = string;
export type FilmReleaseYear = string;
export type FilmPlot = string;
export type FilmDirectors = string;

export type FilmId = string | number;

interface FilmPreviewConfig {
    id: FilmId;
    title: FilmTitle;
    imageUrl: FileURL;
    subtitle?: string;
}

export class FilmPreview {
    constructor(private config: FilmPreviewConfig) {}

    get id() {
        return this.config.id;
    }

    get title() {
        return this.config.title;
    }

    get imageUrl() {
        return this.config.imageUrl;
    }

    get subtitle() {
        return this.config.subtitle;
    }
}
