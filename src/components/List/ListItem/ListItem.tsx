import { FC, useState } from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../../shared/models/BaseProps';
import { Item } from '../../../shared/models/Item';
import { useActions } from '../../../shared/store/Store';
import { ListItemButton } from './Button';
import { ListItemContainer } from './ListItemContainer';

interface Props extends BaseProps {
    item: Item;
}

export const ListItem: FC<Props> = ({ item }) => {
    const {
        markAsDone,
        markAsUndone
    } = useActions();

    const btnLabel = item.isDone ? 'Undone' : 'Done';
    const btnColorClass = item.isDone ? 'btn-warning' : 'btn-primary';
    const onClick = () => item.isDone ? markAsUndone(item) : markAsDone(item)

    const getButtonLabel = (isHover: boolean) => {
        if (isHover) {
            if (item.isDone) {
                return `${btnLabel} :(`;
            }
            else {
                return `${btnLabel} :D`;
            }
        }

        return btnLabel
    }

    return (
        <ListItemContainer className='rounded' opaque={item.isDone}>
            <div className='d-flex flex-wrap flex-column flex-sm-row align-items-sm-center'>
                <div className='text-white p-3'>{item.text}</div>

                <div className='p-3 ms-auto'>
                    <ListItemButton className={btnColorClass} onClick={onClick}>
                        {({ isHover }) => getButtonLabel(isHover)}
                    </ListItemButton>
                </div>
            </div>
        </ListItemContainer>

    );
}
