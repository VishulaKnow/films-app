import { HtmlElementIdAttrValue } from "../../types";

interface TextInputProps {
    placeholder?: string;
    id?: HtmlElementIdAttrValue;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return <input type="text" placeholder={props.placeholder || ""} id={props.id || ""} />;
};
