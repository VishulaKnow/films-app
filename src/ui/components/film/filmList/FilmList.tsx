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
                {props.films.length ? (
                    props.films.map((film) => <FilmCard film={film} key={film.id}></FilmCard>)
                ) : (
                    <NoFilmsMessage></NoFilmsMessage>
                )}
            </div>
        </div>
    );
};

export const NoFilmsMessage: React.FC = () => {
    return (
        <div className="film-list-empty">
            <h3>There are not films!</h3>
        </div>
    );
};
