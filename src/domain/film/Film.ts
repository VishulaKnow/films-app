import { FileURL } from "../filmDbApi/types";

export type FilmName = string;

interface FilmConfig {
    title: FilmName;
    imageUrl: FileURL;
    subtitle?: string;
}

export class Film {
    constructor(private config: FilmConfig) {}

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
