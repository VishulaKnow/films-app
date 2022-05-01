import React from "react";

interface FormFieldProps {
    label: JSX.Element;
    field: JSX.Element;
}

export const AbstractFormField: React.FC<FormFieldProps> = (props) => {
    return (
        <div className="form-field-wrap">
            <div className="form-field-content">
                <div className="form-field-label-wrap">{props.label}</div>
                <div className="form-field-input-wrap">{props.field}</div>
            </div>
        </div>
    );
};
