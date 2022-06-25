import { useState } from "react";
import { BaseProps } from "../../models/BaseProps";
import { foo } from "../../shared/functions/foo";

interface TextFieldProps extends BaseProps {
    initialValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const TextField = ({ initialValue = '', placeholder, onChange = foo }: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);

    const onInput = event => {
        setValue(event.target.value);
    }

    const onEnter = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (!value) {
            return;
        }

        onChange(value);
        setValue('');
    }

    return (
        <div className="input-group">
            <input type="text" className="form-control" value={value} placeholder={placeholder} onKeyDown={onEnter} onInput={onInput} />
            <button className="btn btn-outline-secondary" type="button" onClick={onSubmit}>Button</button>
        </div>
    );
};