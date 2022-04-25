import { ApiKey } from "../../../domain/filmDbApi/ApiKey";
import { TextField } from "../../components/textField/TextField";
import "./loginPage.css";

interface LoginPageOptions {
    onSubmit(apiKey: ApiKey): void;
}

export const LoginPage: React.FC<LoginPageOptions> = (options) => {
    return (
        <div className="login-page-wrap">
            <div className="login-page-form-wrap">
                <div className="login-page-form-content">
                    <h2 className="login-page-header-text">Login</h2>

                    <form>
                        <TextField title="Token" id="token"></TextField>
                    </form>
                </div>
            </div>
        </div>
    );
};
