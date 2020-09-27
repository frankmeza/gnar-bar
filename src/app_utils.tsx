import { Item, ItemMap } from "./common_types";

const BEGINNING = 0;
const END = -1;

// todo write tests

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
            ...itemList.slice(indexOfItem, END),
        ]);
    } else {
        callbackFn([item, ...itemList]);
    }
};

// eslint-ignore
export const createItemMap = (items: Item[]): ItemMap<Item> => {
    return items.reduce((acc, item) => {
        return {
            ...acc,
            [item.id]: item,
        };
    }, {} as ItemMap<Item>);
};
