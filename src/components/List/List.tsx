import { FC } from 'react';
import { BaseProps } from '../../shared/interfaces/BaseProps';
import { Item } from '../../shared/interfaces/Item';
import { ListItem } from './ListItem/ListItem';

export interface Props extends BaseProps {
    items: Item[];
}

export const List: FC<Props> = ({ items, className }) => {
    return (
        <div className={className}>
            {items.map(item =>
                <div key={item.id} className='mb-3'>
                    <ListItem item={item} />
                </div>
            )}
        </div>
    );
}