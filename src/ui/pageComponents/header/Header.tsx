import { Button } from "../../components/button/Button";
import "./header.css";

export const Header: React.FC = () => {
    return (
        <header>
            <div className="header-content-wrap">
                <div className="header-content">
                    <div className="app-name">
                        <span>Films app</span>
                    </div>
                    <div className="header-user-block">
                        <Button iconName="user" text="Logout" execute={() => void 0}></Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
