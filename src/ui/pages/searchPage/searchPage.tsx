import React from "react";
import { Film } from "../../../domain/film/Film";
import { FilmList } from "../../components/film/filmList/FilmList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import "./searchPage.css";

export const SearchPage: React.FC = () => {
    const testFilms = [new Film({ title: "Film Title" })];

    return (
        <div className="search-page-wrapper">
            <div className="search-input-block">
                <div className="search-input-wrapper">
                    <SearchInput placeholder="Type film name..." id="film-search"></SearchInput>
                </div>
            </div>
            <div className="search-result-block">
                <div className="search-result-content">
                    <FilmList films={testFilms}></FilmList>
                </div>
            </div>
        </div>
    );
};
