import { Film } from "../../../film/Film";
import { FilmPreview } from "../../../film/FilmPreview";
import { FilmReview } from "../../../review/FilmReview";
import { Random } from "../../../utils/Random";
import { MilliSecondsAmount } from "../../types";
import { DbApiService } from "../DbApiService";

interface FakeApiServiceOptions {
    timeout: {
        min: MilliSecondsAmount;
        max: MilliSecondsAmount;
    };
}

export class FakeApiService implements DbApiService {
    constructor(private options: FakeApiServiceOptions) {}

    searchFilmsByTitle(): Promise<FilmPreview[]> {
        return this.getResultWithTimeout([
            new FilmPreview({
                id: "id1231",
                title: "Interception",
                subtitle: "(2010)",
                imageUrl:
                    "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg"
            })
        ]);
    }

    fetchFilm(): Promise<Film | null> {
        return this.getResultWithTimeout(
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
    }

    fetchReviews(): Promise<FilmReview[]> {
        return this.getResultWithTimeout([
            new FilmReview({
                publisher: "Boxoffice Magazine",
                author: "Pete Hammond",
                rate: 100,
                content:
                    "In terms of sheer originality, ambition and achievement, Inception is the movie of the summer, the movie of the year and the movie of our dreams."
            }),
            new FilmReview({
                publisher: "Variety",
                author: "Justin Chang",
                rate: 56,
                content:
                    "If Inception is a metaphysical puzzle, it's also a metaphorical one: It's hard not to draw connections between Cobb's dream-weaving and Nolan's filmmaking -- an activity devoted to constructing a simulacrum of reality, intended to seduce us, mess with our heads and leave a lasting impression. Mission accomplished."
            })
        ]);
    }

    private getResultWithTimeout<T>(result: T): Promise<T> {
        const { max, min } = this.options.timeout;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, new Random().randInt(min, max));
        });
    }
}
