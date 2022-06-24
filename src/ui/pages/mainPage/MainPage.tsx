import { Header } from "../../pageComponents/header/Header";

interface MainPageProps {
    content: JSX.Element;
}

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            <Header></Header>
            <div className="page-content">{props.content}</div>
        </div>
    );
};
