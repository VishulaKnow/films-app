import { FilmPreview } from "../../../../domain/film/FilmPreview";
import { FilmCard } from "../filmCard/FilmCard";
import "./filmList.css";

interface FilmListProps {
    films: FilmPreview[];
}

export const FilmList: React.FC<FilmListProps> = (props) => {
    return (
        <div className="film-list-wrapper">
            <div className="film-list-content">
                {props.films.map((film) => (
                    <FilmCard film={film} key={film.id}></FilmCard>
                ))}
            </div>
        </div>
    );
};
