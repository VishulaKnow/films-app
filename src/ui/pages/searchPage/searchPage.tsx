import React from "react";
import { useDispatch } from "react-redux";
import { FilmTitle } from "../../../domain/film/Film";
import { fetchFilmsListAction } from "../../../store/reducers/FilmsState";
import { useTypedSelector } from "../../../store/UseTypedSelector";
import { FilmList } from "../../components/film/filmList/FilmList";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";
import { SearchInput } from "../../components/searchInput/SearchInput";
import "./searchPage.css";

export const SearchPage: React.FC = () => {
    const { filmList, fetchInProgress } = useTypedSelector((store) => store.filmSearch);
    const { user } = useTypedSelector((store) => store.user);
    const dispatch = useDispatch();

    const fetchFilms = (title: FilmTitle) => {
        //TODO: rm any
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
                    {fetchInProgress ? (
                        <SearchPageLoadingSpinner></SearchPageLoadingSpinner>
                    ) : filmList?.length ? (
                        <FilmList films={filmList}></FilmList>
                    ) : (
                        <NoFilmsMessage></NoFilmsMessage>
                    )}
                </div>
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

export const SearchPageLoadingSpinner: React.FC = () => {
    return (
        <div className="search-page-loading-spinner">
            <LoadingSpinner></LoadingSpinner>
        </div>
    );
};
