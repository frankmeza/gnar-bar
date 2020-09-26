import { Item } from "./types";

const BEGINNING = 0;
const END = -1;

export type ItemMap<T> = {
    [id: string]: T;
};

// todo write test
export const handleSelectItem = (
    item: Item,
    itemList: Item[],
    callbackFn: Function,
) => {
    const itemIds = itemList.map(item => item.id);
    const indexOfItem = itemIds.indexOf(item.id);
    const isItemSelected = indexOfItem > -1;

    if (isItemSelected) {
        callbackFn([
            ...itemList.slice(BEGINNING, indexOfItem),
            ...itemList.slice(indexOfItem, END)
        ]);
    } else {
        callbackFn([item, ...itemList]);
    }
};

export const createItemMap = (items: Item[]): ItemMap<Item> => {
    const itemMap = items.reduce(
        (acc, item) => {
            return {
                ...acc,
                [item.id]: item,
            };
        },
        {} as ItemMap<Item>,
    );

    return itemMap;
};
