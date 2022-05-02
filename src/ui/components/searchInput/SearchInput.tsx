import { useState } from "react";
import { Button } from "../button/Button";
import { TextInput, TextInputProps } from "../textInput/TextInput";
import "./searchInput.css";

interface SearchInputProps extends TextInputProps {
    execute?(value: string): void;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const [value, setValue] = useState("");

    return (
        <div className="search-input">
            <div className="search-input-text-input-wrap">
                <TextInput
                    id={props.id}
                    name={props.name}
                    onChange={(value) => {
                        setValue(value);
                        props.onChange(value);
                    }}
                    placeholder={props.placeholder}
                ></TextInput>
            </div>
            <div className="search-input-button-wrap">
                <Button
                    iconName="search"
                    execute={() => {
                        if (value) props.execute(value);
                    }}
                ></Button>
            </div>
        </div>
    );
};
