import { FilmPreview } from "../../../../domain/film/Film";
import "./filmCard.css";

interface FilmCardProps {
    film: FilmPreview;
}

export const FilmCard: React.FC<FilmCardProps> = (props) => {
    const { film } = props;

    return (
        <div className="film-card-wrapper">
            <div className="film-card-content">
                <div className="film-card-item film-card-image-block">
                    <img src={film.imageUrl} alt="Film image" className="film-card-image" />
                </div>
                <div className="film-card-item film-card-info-block">
                    <div className="film-card-info-content">
                        <div className="film-title-block">
                            <h2 className="film-title">{film.title}</h2>
                            <span className="film-subtitle">{film.subtitle}</span>
                        </div>
                    </div>
                </div>
                <div className="film-card-item film-card-score"></div>
            </div>
        </div>
    );
};
