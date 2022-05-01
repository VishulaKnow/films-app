import { HtmlElementIdAttrValue } from "../../types";
import { AbstractFormField } from "../abstractFormField/AbstractFormField";
import { FieldLabel } from "../fieldLabel/FieldLabel";
import { TextInput } from "../textInput/TextInput";

interface TextFieldProps {
    id: HtmlElementIdAttrValue;
    title: string;
    placeholder?: string;
    onChange?(value: string): void;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
    return (
        <AbstractFormField
            field={<TextInput id={props.id} placeholder={props.placeholder} onChange={props.onChange}></TextInput>}
            label={<FieldLabel for={props.id} textContent={props.title}></FieldLabel>}
        ></AbstractFormField>
    );
};
