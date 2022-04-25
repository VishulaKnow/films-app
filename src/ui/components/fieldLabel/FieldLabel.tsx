import { HtmlElementIdAttrValue } from "../../types";

interface FieldLabelProps {
    textContent: string;
    for: HtmlElementIdAttrValue;
}

export const FieldLabel: React.FC<FieldLabelProps> = (props) => {
    return <label htmlFor={props.for}>{props.textContent}</label>;
};
