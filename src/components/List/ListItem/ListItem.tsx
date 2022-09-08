import { FC } from 'react';
import { BaseProps } from '../../../shared/interfaces/BaseProps';
import { Item } from '../../../shared/interfaces/Item';
import { useActions } from '../../../shared/store/Store';
import { ListItemButton } from './Button';
import { ListItemContainer } from './ListItemContainer';

interface Props extends BaseProps {
    item: Item;
}

export const ListItem: FC<Props> = ({ item }) => {
    const {
        markAsDone,
        markAsUndone,
        removeItem
    } = useActions();

    const btnLabel = item.isDone ? 'Not done yet' : 'Done';
    const btnColorClass = item.isDone ? 'btn-warning' : 'btn-primary';
    const onSubmit = () => item.isDone ? markAsUndone(item) : markAsDone(item)
    const onRemove = () => removeItem(item)

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
                    <ListItemButton className={'btn-outline-danger me-3'} onClick={onRemove}>
                        {() => 'Remove'}
                    </ListItemButton>

                    <ListItemButton className={btnColorClass} onClick={onSubmit}>
                        {({ isHover }) => getButtonLabel(isHover)}
                    </ListItemButton>
                </div>
            </div>
        </ListItemContainer>

    );
}
