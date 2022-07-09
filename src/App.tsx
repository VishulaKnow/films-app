import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmPage } from "./ui/pages/filmPage/FilmPage";
import { LoginPage } from "./ui/pages/loginPage/LoginPage";
import { MainPage } from "./ui/pages/mainPage/MainPage";
import { SearchPage } from "./ui/pages/searchPage/SearchPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/search" element={<MainPage content={<SearchPage></SearchPage>}></MainPage>}></Route>
                    <Route path="/film/:filmId" element={<MainPage content={<FilmPage></FilmPage>}></MainPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
