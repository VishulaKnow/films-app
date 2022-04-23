export type FilmName = string;

interface FilmConfig {
    name: FilmName;
}

export class Film {
    constructor(private config: FilmConfig) {}

    get name() {
        return this.config.name;
    }
}
