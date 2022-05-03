import { FileURL } from "../filmDbApi/types";

export type FilmName = string;

export type FilmId = string | number;

interface FilmConfig {
    id: FilmId;
    title: FilmName;
    imageUrl: FileURL;
    subtitle?: string;
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

    get subtitle() {
        return this.config.subtitle;
    }
}
