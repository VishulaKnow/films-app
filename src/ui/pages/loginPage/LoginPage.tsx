import { useEffect, useState } from "react";
import { ApiKey } from "../../../domain/types";
import { Button } from "../../components/button/Button";
import { TextField } from "../../components/textField/TextField";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { setUserAction } from "../../../store/reducers/UserState";
import { ApiKeyItem } from "../../../store/envStorage/Items";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../store/UseTypedSelector";

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const { user } = useTypedSelector((state) => state.user);

    useEffect(() => {
        if (user) navigate("/search");
    }, []);

    const [apiKey, setApiKey] = useState("");

    const dispatch = useDispatch();

    const login = (apiKey: ApiKey) => {
        dispatch(setUserAction(apiKey));
        ApiKeyItem.setValue(apiKey);
    };

    return (
        <div className="login-page-wrap">
            <div className="login-page-form-wrap">
                <div className="login-page-form-content">
                    <h2 className="login-page-header-text">Login</h2>

                    <form
                        onSubmit={(e) => {
                            login(apiKey);
                            e.preventDefault();
                            navigate("/search");
                        }}
                    >
                        <TextField title="Api key" id="api_key" onChange={(value) => setApiKey(value)}></TextField>
                        <div className="form-button-block">
                            <Button text="Login" iconName="user" execute={() => login(apiKey)}></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
