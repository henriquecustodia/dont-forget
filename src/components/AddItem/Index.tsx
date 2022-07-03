import { FC } from "react";
import { TextField } from "../../shared/components/Input";
import { BaseProps } from "../../shared/interfaces/BaseProps";
import { useActions } from "../../shared/store/Store";

interface Props extends BaseProps { }

export const AddItem: FC<Props> = (props) => {

    const { add } = useActions();

    return (
        <div {...props}>
            <TextField placeholder='Something you cannot forget' btnLabel='add' onChange={add}></TextField>
        </div>
    );
}