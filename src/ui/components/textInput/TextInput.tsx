import { KeyboardActionsOnElement, setKeyboardActions } from "../../services/KeyboardActions";
import { HtmlElementIdAttrValue } from "../../types";

export interface TextInputProps {
    name?: string;
    placeholder?: string;
    id?: HtmlElementIdAttrValue;
    onChange?(value: string): void;
    keyboardActions?: KeyboardActionsOnElement;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <input
            type="text"
            placeholder={props.placeholder || ""}
            id={props.id || ""}
            name={props.name}
            onChange={(e) => props.onChange?.(e.target.value)}
            onKeyDown={
                props.keyboardActions
                    ? (e) => {
                          if (props.keyboardActions) setKeyboardActions(e, props.keyboardActions);
                      }
                    : void 0
            }
        />
    );
};
