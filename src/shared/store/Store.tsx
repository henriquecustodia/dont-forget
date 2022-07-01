import { createContext, useContext } from "react";
import { BaseProps } from "../models/BaseProps";
import { Item } from "../models/Item";
import { generateId } from "../functions/generateId";
import { useStorage } from "../hooks/useStorage";

class State {
    items: Item[];
    add: (text: string) => void;
    markAsDone: (item: Item) => void;
    markAsUndone: (item: Item) => void;
    getUndoneItems: () => Item[];
    getDoneItems: () => Item[];
}

export const StoreContext = createContext<State>(new State());

export function useActions() {
    const {
        getDoneItems,
        getUndoneItems,
        add,
        markAsDone,
        markAsUndone
    } = useContext(StoreContext);

    return {
        getDoneItems,
        getUndoneItems,
        add,
        markAsDone,
        markAsUndone
    }
}

export function StoreProvider({ children }: BaseProps) {
    const [items, setItems] = useStorage<Item[]>([]);

    function add(text: string) {
        const newItem: Item = {
            id: generateId(),
            isDone: false,
            text
        }

        const newItems = [newItem, ...items];

        setItems(newItems);
    }

    function _mutateItem(id: string, mutateFn: (item: Item) => void) {
        const newItems = [...items];
        const itemFound = newItems.find(i => i.id === id);

        if (!itemFound) {
            return;
        }

        mutateFn(itemFound);

        setItems(newItems);
    }

    function markAsDone(item: Item) {
        _mutateItem(item.id, item => item.isDone = true);
    }

    function markAsUndone(item: Item) {
        _mutateItem(item.id, item => item.isDone = false);
    }

    function getDoneItems() {
        return items.filter(i => i.isDone)
    }

    function getUndoneItems() {
        return items.filter(i => !i.isDone)
    }

    const contextValue: State = {
        items: items,
        add,
        markAsDone,
        markAsUndone,
        getDoneItems,
        getUndoneItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
