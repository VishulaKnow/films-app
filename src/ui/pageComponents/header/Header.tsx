import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserAction } from "../../../store/reducers/UserState";
import { Button } from "../../components/button/Button";
import { Link } from "../../components/link/Link";
import "./header.css";

export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearUser = () => {
        dispatch(clearUserAction());
        navigate("/login");
    };

    return (
        <header>
            <div className="header-content-wrap">
                <div className="header-content">
                    <div className="app-name">
                        <Link
                            text="Films app"
                            inNewTab={true}
                            href="https://github.com/VishulaKnow/films-app"
                            external={true}
                        ></Link>
                    </div>
                    <div className="header-user-block">
                        <Button iconName="sign-out" text="Logout" execute={() => clearUser()}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
