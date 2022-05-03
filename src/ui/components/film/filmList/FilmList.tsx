import { Film } from "../../../../domain/film/Film";
import { FilmCard } from "../filmCard/FilmCard";
import "./filmList.css";

interface FilmListProps {
    films: Film[];
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
