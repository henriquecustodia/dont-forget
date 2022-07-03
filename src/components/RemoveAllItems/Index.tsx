import { FC } from "react";
import { TrashIcon } from "../../shared/components/Icons";
import { useActions } from "../../shared/store/Store";

export const RemoveAllItemsBtn: FC<{}> = () => {
    const { removeAllItems } = useActions();

    return (
        <button className="btn btn-outline-danger" onClick={removeAllItems}>
            <span className="me-2">Remove all items</span>
            <TrashIcon />
        </button>
    );
};