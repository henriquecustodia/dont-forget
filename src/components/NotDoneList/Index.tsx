import { FC } from "react";
import { BaseProps } from "../../shared/interfaces/BaseProps";
import { useGetters } from "../../shared/store/Store";
import { List } from "../List/List";

interface Props extends BaseProps { }

export const NotDoneList: FC<Props> = (props) => {

    const { getNotDoneItems } = useGetters();

    const notDoneItems = getNotDoneItems();

    return (
        <List items={notDoneItems} {...props} />
    );
}