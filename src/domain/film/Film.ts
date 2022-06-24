import { FileURL } from "../filmDbApi/types";

export type FilmTitle = string;

export type FilmId = string | number;

interface FilmConfig {
    id: FilmId;
    title: FilmTitle;
    imageUrl: FileURL;
    subtitle?: string;
}

export class FilmPreview {
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

    get subtitle() {
        return this.config.subtitle;
    }
}
