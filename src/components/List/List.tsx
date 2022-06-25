import { BaseProps } from '../../models/BaseProps';
import { Item } from '../../models/Item';
import { ListItem } from './ListItem/ListItem';

export interface ListProps extends BaseProps {
    items: Item[];
}

export function List({ items, className }: ListProps) {
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