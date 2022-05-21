import { useDispatch } from "react-redux";
import { ApiKey } from "./domain/types";
import { ApiKeyItem } from "./store/envStorage/Items";
import { setUserAction } from "./store/reducers/UserState";
import { useTypedSelector } from "./store/UseTypedSelector";
import { LoginPage } from "./ui/pages/loginPage/LoginPage";
import { SearchPage } from "./ui/pages/searchPage/SearchPage";

function App() {
    const { user } = useTypedSelector((store) => store.user);

    const dispatch = useDispatch();

    const setApiKey = (apiKey: ApiKey) => {
        dispatch(setUserAction(apiKey));
        ApiKeyItem.setValue(apiKey);
    };

    return (
        <div className="App">
            {user ? (
                <SearchPage></SearchPage>
            ) : (
                <LoginPage
                    onSubmit={(apiKey) => {
                        setApiKey(apiKey);
                    }}
                ></LoginPage>
            )}
        </div>
    );
}

export default App;
