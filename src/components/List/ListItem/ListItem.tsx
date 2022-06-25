import { BaseProps } from '../../../models/BaseProps';
import { Item } from '../../../models/Item';
import Checkbox from '../../../shared/components/checkbox/Checkbox';
import { InCart } from '../../../shared/contexts/InCart';

export interface ListItemProps extends BaseProps {
    item: Item;
}

export function ListItem({ item }: ListItemProps) {
    return (
        <InCart.Actions>
            {({ markItemAsAdded, markItemAsUnadded }) => (
                <div className='d-flex border rounded p-3 d-flex' style={{opacity: item.isAdded ? 0.3 : 1 }}>
                    <div>{item.name}</div>

                    <div className='ms-auto'>
                        <Checkbox value={item.isAdded} onChange={(checked) => checked ? markItemAsAdded(item) : markItemAsUnadded(item)}>
                            In Cart
                        </Checkbox>
                    </div>

                </div>
            )}
        </InCart.Actions>
    )
}