import { Film } from "../../../film/Film";
import { FilmPreview } from "../../../film/FilmPreview";
import { DbApiService } from "../DbApiService";

export class FakeApiService implements DbApiService {
    searchFilmsByTitle(): Promise<FilmPreview[]> {
        return new Promise<FilmPreview[]>((resolve) => {
            resolve([
                new FilmPreview({
                    id: "id1231",
                    title: "Interception",
                    subtitle: "(2010)",
                    imageUrl:
                        "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg"
                })
            ]);
        });
    }

    fetchFilm(): Promise<Film | null> {
        return new Promise<Film>((resolve) => {
            resolve(
                new Film({
                    id: "id1231",
                    title: "Interception",
                    directors: "Nolan",
                    fullTitle: "Interception (2010)",
                    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
                    releaseYear: "2010",
                    imageUrl:
                        "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg"
                })
            );
        });
    }
}
