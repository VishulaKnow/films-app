import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiKey } from "./domain/types";
import { ApiKeyItem } from "./store/envStorage/Items";
import { setUserAction } from "./store/reducers/UserState";
import { FilmPage } from "./ui/pages/filmPage/FilmPage";
import { LoginPage } from "./ui/pages/loginPage/LoginPage";
import { MainPage } from "./ui/pages/mainPage/MainPage";
import { SearchPage } from "./ui/pages/searchPage/SearchPage";

function App() {
    const dispatch = useDispatch();

    const setApiKey = (apiKey: ApiKey) => {
        dispatch(setUserAction(apiKey));
        ApiKeyItem.setValue(apiKey);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <LoginPage
                                onSubmit={(apiKey) => {
                                    setApiKey(apiKey);
                                }}
                            ></LoginPage>
                        }
                    ></Route>
                    <Route path="/search" element={<MainPage content={<SearchPage></SearchPage>}></MainPage>}></Route>
                    <Route path="/film/:filmId" element={<MainPage content={<FilmPage></FilmPage>}></MainPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
