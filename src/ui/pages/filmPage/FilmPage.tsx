import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmAction } from "../../../store/reducers/FilmsState";
import { useTypedSelector } from "../../../store/UseTypedSelector";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";
import "./filmPage.css";

export const FilmPage: React.FC = () => {
    const { filmId } = useParams();
    if (!filmId) throw new Error("Film id not found!");

    const { user } = useTypedSelector((store) => store.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFilmAction(filmId, user) as any);
    }, []);

    const film = useTypedSelector((state) => state.filmSearch.currentFilm);

    return (
        <div className="film-page-wrap">
            {film ? (
                <div className="film-page-content">
                    <div className="film-page-item">
                        <div className="film-page-item-content">
                            <div className="film-page-item-image-block">
                                <img src={film.imageUrl} alt="" className="film-page-item-image" />
                            </div>
                            <div className="film-page-item-info-block">
                                <div className="film-page-item-title-block">
                                    <h2 className="film-page-item-title">{film.title}</h2>
                                </div>
                                <div className="film-page-item-plot-block">
                                    <span>Full title: {film.fullTitle}</span>
                                </div>
                                <div className="film-page-item-director">
                                    <span>Directors: {film.directors}</span>
                                </div>
                                <div className="film-page-item-plot-block">
                                    <p className="film-page-item-plot">{film.plot}</p>
                                </div>
                                <div className="delete-me">({film.id})</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingSpinner></LoadingSpinner>
            )}
        </div>
    );
};
