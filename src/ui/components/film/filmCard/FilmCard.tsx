import { Film } from "../../../../domain/film/Film";
import "./filmCard.css";

interface FilmCardProps {
    film: Film;
}

export const FilmCard: React.FC<FilmCardProps> = (props) => {
    const { film } = props;

    return (
        <div className="film-card-wrapper">
            <div className="film-card-content">
                <div className="film-card-item"></div>
                <div className="film-card-item film-card-info-block">
                    <div className="film-card-info-content">
                        <div className="film-title-block">
                            <h2 className="film-title">{film.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="film-card-item film-card-score"></div>
            </div>
        </div>
    );
};
