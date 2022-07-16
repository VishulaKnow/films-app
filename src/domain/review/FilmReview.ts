type ReviewerPublisherName = string;
type FilmReviewRate = number;

interface FilmReviewConfig {
    publisher: ReviewerPublisherName;
    author: string;
    rate: FilmReviewRate;
    content: string;
}

export class FilmReview {
    constructor(private config: FilmReviewConfig) {}

    get publisher() {
        return this.config.publisher;
    }

    get author() {
        return this.config.author;
    }

    get rate() {
        return this.config.rate;
    }

    get content() {
        return this.config.content;
    }
}
