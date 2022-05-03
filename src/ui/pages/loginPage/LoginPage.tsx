import { useState } from "react";
import { ApiKey } from "../../../domain/types";
import { Button } from "../../components/button/Button";
import { TextField } from "../../components/textField/TextField";
import "./loginPage.css";

interface LoginPageProps {
    onSubmit(apiKey: ApiKey): void;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
    const [apiKey, setApiKey] = useState("");

    return (
        <div className="login-page-wrap">
            <div className="login-page-form-wrap">
                <div className="login-page-form-content">
                    <h2 className="login-page-header-text">Login</h2>

                    <form
                        onSubmit={(e) => {
                            props.onSubmit(apiKey);
                            e.preventDefault();
                        }}
                    >
                        <TextField title="Api key" id="api_key" onChange={(value) => setApiKey(value)}></TextField>
                        <div className="form-button-block">
                            <Button text="Login" iconName="user" execute={() => props.onSubmit(apiKey)}></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
