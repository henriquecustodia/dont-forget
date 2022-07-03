import { createContext, useContext } from "react";
import { BaseProps } from "../interfaces/BaseProps";
import { Item } from "../interfaces/Item";
import { generateId } from "../functions/generateId";
import { useStorage } from "../hooks/useStorage";

class State {
    items: Item[];
    add: (text: string) => void;
    markAsDone: (item: Item) => void;
    markAsUndone: (item: Item) => void;
    getNotDoneItems: () => Item[];
    getDoneItems: () => Item[];
    removeAllItems: () => void;
    hasItems: () => boolean;
    isAllDone: () => boolean;
}

export const StoreContext = createContext<State>(new State());

export function useActions() {
    const {
        add,
        markAsDone,
        markAsUndone,
        removeAllItems
    } = useContext(StoreContext);

    return {
        add,
        markAsDone,
        markAsUndone,
        removeAllItems
    }
}

export function useGetters() {
    const {
        getDoneItems,
        getNotDoneItems,
        isAllDone,
        hasItems
    } = useContext(StoreContext);

    return {
        getDoneItems,
        getNotDoneItems,
        isAllDone,
        hasItems
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

    function getNotDoneItems() {
        return items.filter(i => !i.isDone)
    }

    function hasItems() {
        return items.length > 0;
    }

    function isAllDone() {
        return hasItems() && items.every(item => item.isDone);
    }

    function removeAllItems() {
        setItems([]);
    }

    const contextValue: State = {
        items: items,
        add,
        markAsDone,
        markAsUndone,
        removeAllItems,
        getDoneItems,
        getNotDoneItems,
        hasItems,
        isAllDone
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};
