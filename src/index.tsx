import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiKey } from "./filmDbApi/ApiKey";
import { ApiService } from "./filmDbApi/ApiService";
import { ImdbApiService } from "./filmDbApi/apis/imdb/ImdbApiService";
import { ImdbUrlGenerator } from "./filmDbApi/apis/imdb/ImdbUrlGenerator";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

(async function test() {
    const apiKey: ApiKey = "";
    const apiService = new ApiService(new ImdbApiService(new ImdbUrlGenerator(apiKey)));
    const res = await apiService.searchFilm("Паразиты");
    console.log(res);
})();
