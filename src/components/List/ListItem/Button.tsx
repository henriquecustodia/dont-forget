import { FC, useState } from "react";
import { BaseProps } from "../../../shared/models/BaseProps";

interface Props extends BaseProps {
    onClick: () => void;
    children: ({ isHover: boolean }) => any
}

export const ListItemButton: FC<Props> = ({ className, onClick, children }) => {
    const [isHover, setHover] = useState(false);

    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            {children({ isHover })}
        </button>
    );
}
