export type FilmName = string;

interface FilmConfig {
    title: FilmName;
}

export class Film {
    constructor(private config: FilmConfig) {}

    get title() {
        return this.config.title;
    }
}
