import { Href } from "../../types";
import "./link.css";

interface LinkProps {
    text: string;
    href?: Href;
    execute?: () => void;
    inNewTab?: boolean;
}

export const Link: React.FC<LinkProps> = (props) => {
    return (
        <a
            className="link"
            href={props.href}
            target={props.inNewTab ? "_blank" : "_self"}
            onClick={props.execute ? () => props.execute?.() : void 0}
        >
            {props.text}
        </a>
    );
};
