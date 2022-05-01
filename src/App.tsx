import { useDispatch } from "react-redux";
import { ApiKey } from "./domain/filmDbApi/ApiKey";
import { setApiKeyAction } from "./store/reducers/userState";
import { LoginPage } from "./ui/pages/loginPage/LoginPage";

function App() {
    const dispatch = useDispatch();

    const setApiKey = (apiKey: ApiKey) => {
        dispatch(setApiKeyAction(apiKey));
    };

    return (
        <div className="App">
            <LoginPage
                onSubmit={(apiKey) => {
                    setApiKey(apiKey);
                }}
            ></LoginPage>
        </div>
    );
}

export default App;
