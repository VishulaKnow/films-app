import { Icon, IconName } from "../icon/Icon";
import "./button.css";

interface ButtonProps {
    execute: () => void;
    text?: string;
    iconName?: IconName;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className="button" onClick={() => props.execute()}>
            {props.iconName ? <Icon name={props.iconName} className="button-icon"></Icon> : null}
            {props.text ? <span className="button-text">{props.text}</span> : null}
        </button>
    );
};
