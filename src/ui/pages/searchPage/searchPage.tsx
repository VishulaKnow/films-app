import React from "react";
import { useDispatch } from "react-redux";
import { FilmTitle } from "../../../domain/film/Film";
import { fetchFilmsListAction } from "../../../store/reducers/FilmsState";
import { useTypedSelector } from "../../../store/UseTypedSelector";
import { FilmList } from "../../components/film/filmList/FilmList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import "./searchPage.css";

export const SearchPage: React.FC = () => {
    const { filmList } = useTypedSelector((store) => store.film);
    const { user } = useTypedSelector((store) => store.user);
    const dispatch = useDispatch();

    const fetchFilms = (title: FilmTitle) => {
        dispatch(fetchFilmsListAction(title, user) as any);
    };

    return (
        <div className="search-page-wrapper">
            <div className="search-input-block">
                <div className="search-input-wrapper">
                    <SearchInput
                        placeholder="Type film name..."
                        id="film-search"
                        execute={(value) => fetchFilms(value)}
                    ></SearchInput>
                </div>
            </div>
            <div className="search-result-block">
                <div className="search-result-content">
                    <FilmList films={filmList ?? []}></FilmList>
                </div>
            </div>
        </div>
    );
};
