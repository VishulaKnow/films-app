import { CSSClassName, Href } from "../../types";
import { Link as ReactRounterDomLink } from "react-router-dom";
import "./link.css";

interface LinkProps {
    text: string;
    external?: boolean;
    href?: Href;
    execute?: () => void;
    inNewTab?: boolean;
    className?: CSSClassName;
}

export const Link: React.FC<LinkProps> = (props) => {
    if (props.external) {
        return (
            <a
                className={`link${props.className ? ` ${props.className}` : ""}`}
                href={props.href}
                target={props.inNewTab ? "_blank" : "_self"}
                onClick={props.execute ? () => props.execute?.() : void 0}
            >
                {props.text}
            </a>
        );
    }
    return (
        <ReactRounterDomLink
            className="link"
            to={{
                pathname: props.href
            }}
            target={props.inNewTab ? "_blank" : "_self"}
        >
            {props.text}
        </ReactRounterDomLink>
    );
};
