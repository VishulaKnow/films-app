import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSClassName } from "../../types";
import { registerIcons } from "./IconLib";

registerIcons();

export type IconName = "search" | "user";

interface IconProps {
    name: IconName;
    className?: CSSClassName;
}

export const Icon: React.FC<IconProps> = (props) => {
    return <FontAwesomeIcon icon={props.name} className={props.className ?? ""}></FontAwesomeIcon>;
};
