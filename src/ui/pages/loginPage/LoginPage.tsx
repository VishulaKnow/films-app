import { ApiKey } from "../../../domain/filmDbApi/ApiKey";

interface LoginPageOptions {
    onSubmit(apiKey: ApiKey): void;
}

export const LoginPage: React.FC<LoginPageOptions> = (options) => {
    return <div></div>;
};
