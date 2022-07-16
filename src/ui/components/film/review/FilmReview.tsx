import { FilmReview } from "../../../../domain/review/FilmReview";
import "./filmReview.css";

interface FilmReviewProps {
    review: FilmReview;
}

export const FilmReviewView: React.FC<FilmReviewProps> = (props) => {
    const { review } = props;

    return (
        <div className="film-review-block">
            <div className="film-review-block-header">
                <h3 className="review-author">
                    {review.publisher} ({review.author})
                </h3>
            </div>
            <div className="film-review-block-main-content">
                <div className="rate-block">
                    <div className="rate">{review.rate}</div>
                </div>
                <div className="rate-block">{review.content}</div>
            </div>
        </div>
    );
};
