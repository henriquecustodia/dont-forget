import { FC } from "react";
import { BaseProps } from "../../shared/interfaces/BaseProps";
import { useGetters } from "../../shared/store/Store";
import { List } from "../List/List";

interface Props extends BaseProps {}

export const DoneList: FC<Props> = (props) => {

    const { getDoneItems } = useGetters();

    const doneItems = getDoneItems();

    return (
        <List items={doneItems} { ...props } />
    );
}