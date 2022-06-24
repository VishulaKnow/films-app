import { useDispatch } from "react-redux";
import { clearUserAction } from "../../../store/reducers/UserState";
import { Button } from "../../components/button/Button";
import { Link } from "../../components/link/Link";
import "./header.css";

export const Header: React.FC = () => {
    const dispatch = useDispatch();

    const clearUser = () => {
        dispatch(clearUserAction());
    };

    return (
        <header>
            <div className="header-content-wrap">
                <div className="header-content">
                    <div className="app-name">
                        <Link text="Films app" href="https://github.com/VishulaKnow/films-app"></Link>
                    </div>
                    <div className="header-user-block">
                        <Button iconName="sign-out" text="Logout" execute={() => clearUser()}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
