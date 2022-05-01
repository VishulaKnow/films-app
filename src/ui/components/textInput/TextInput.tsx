import { HtmlElementIdAttrValue } from "../../types";

interface TextInputProps {
    name?: string;
    placeholder?: string;
    id?: HtmlElementIdAttrValue;
    onChange?(value: string): void;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <input
            type="text"
            placeholder={props.placeholder || ""}
            id={props.id || ""}
            name={props.name}
            onChange={(e) => props.onChange?.(e.target.value)}
        />
    );
};
