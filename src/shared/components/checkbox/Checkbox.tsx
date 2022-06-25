import { BaseProps } from '../../../models/BaseProps';
import { foo } from '../../functions/foo';

export interface CheckboxProps extends BaseProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function ({ value = false, onChange = foo, children }: CheckboxProps) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                checked={value}
                value={String(value)}
                onChange={() => onChange(!value)}
            />
            <label className="form-check-label">
                {children}
            </label>
        </div>
    );
}