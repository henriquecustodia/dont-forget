import { FC, useState } from "react";
import { BaseProps } from "../interfaces/BaseProps";
import { foo } from "../functions/foo";

interface Props extends BaseProps {
    initialValue?: string;
    placeholder?: string;
    btnLabel?: string
    onChange?: (value: string) => void;
}

export const TextField: FC<Props> = ({ initialValue = '', placeholder, btnLabel, onChange = foo }) => {
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
            <button className="btn btn-primary" type="button" onClick={onSubmit}>{btnLabel}</button>
        </div>
    )
};


