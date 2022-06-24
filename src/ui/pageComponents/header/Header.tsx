import { useDispatch } from "react-redux";
import { clearUserAction } from "../../../store/reducers/UserState";
import { Button } from "../../components/button/Button";
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
                        <span>Films app</span>
                    </div>
                    <div className="header-user-block">
                        <Button iconName="sign-out" text="Logout" execute={() => clearUser()}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
