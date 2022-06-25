import { createContext, useState } from "react";
import { BaseProps } from "../../models/BaseProps";
import { Item } from "../../models/Item";
import { generateId } from "../functions/generateId";

const initialState: Item[] = [];

class State {
    items: Item[];
    add: (name: string) => void;
    markItemAsAdded: (item: Item) => void;
    markItemAsUnadded: (item: Item) => void;
}

const InCartContext = createContext<State>(new State());

const InCart = ({ children }: BaseProps) => {
    const [cartItems, setCartItems] = useState<Item[]>(initialState);

    function add(name: string) {
        const newItem: Item = {
            id: generateId(),
            isAdded: false,
            name
        }

        const newItems = [newItem, ...cartItems];

        setCartItems(newItems);
    }

    function _mutateItem(id: string, mutateFn: (item: Item) => void) {
        const newItems = [...cartItems];
        const itemFound = newItems.find(i => i.id === id);

        if (!itemFound) {
            return;
        }

        mutateFn(itemFound);

        setCartItems(newItems);
    }

    function markItemAsAdded(item: Item) {
        _mutateItem(item.id, item => item.isAdded = true);
    }

    function markItemAsUnadded(item: Item) {
        _mutateItem(item.id, item => item.isAdded = false);
    }

    const contextValue: State = {
        items: cartItems,
        add,
        markItemAsAdded,
        markItemAsUnadded
    };

    return (
        <InCartContext.Provider value={contextValue}>
            {children}
        </InCartContext.Provider>
    );
};

InCart.Actions = ({ children }: any) => (
    <InCartContext.Consumer>
        {({ ...actions }) => children({ ...actions })}
    </InCartContext.Consumer>
);

InCart.NotAddedItems = ({ children }: any) => (
    <InCartContext.Consumer>
        {({ items }) => {
            const notAddedItems = getNotAddedItems(items);
            return children(notAddedItems);
        }}
    </InCartContext.Consumer>
);

InCart.AddedItems = ({ children }: any) => (
    <InCartContext.Consumer>
        {({ items }) => {
            const addedItems = getAddedItems(items)
            return children(addedItems);
        }}
    </InCartContext.Consumer>
);

function getAddedItems(items: Item[]) {
    return items.filter(i => i.isAdded)
}

function getNotAddedItems(items: Item[]) {
    return items.filter(i => !i.isAdded)
}


export { InCart };