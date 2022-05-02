import React from "react";
import { Film } from "../../../domain/film/Film";
import { FilmList } from "../../components/film/filmList/FilmList";
import { SearchInput } from "../../components/searchInput/SearchInput";
import "./searchPage.css";

export const SearchPage: React.FC = () => {
    const testFilms = [
        new Film({
            title: "Inception",
            subtitle: "tt1375666 (IMDB)",
            imageUrl:
                "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg"
        })
    ];

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
