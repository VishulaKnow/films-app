import { useState } from "react";
import { ApiKey } from "../../../domain/filmDbApi/ApiKey";
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
                    </form>
                </div>
            </div>
        </div>
    );
};
