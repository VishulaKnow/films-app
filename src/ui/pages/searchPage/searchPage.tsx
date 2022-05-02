import React from "react";
import { SearchInput } from "../../components/searchInput/SearchInput";
import "./searchPage.css";

export const SearchPage: React.FC = () => {
    return (
        <div className="search-page-wrapper">
            <div className="search-input-block">
                <div className="search-input-wrapper">
                    <SearchInput placeholder="Type film name..." id="film-search"></SearchInput>
                </div>
            </div>
            <div className="search-result-block"></div>
        </div>
    );
};
