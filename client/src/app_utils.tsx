import { Item, ItemMap } from "./core_types";

// todo write tests

export const handleSelectItem = <T extends Item>(
    item: T,
    itemList: T[],
): T[] => {
    const itemIds = itemList.map(item => item.id && item.id);
    const indexOfItem = itemIds.indexOf(item.id);
    const isItemSelected = indexOfItem > -1;

    return isItemSelected
        ? itemList.filter(i => i.id !== item.id)
        : [item, ...itemList];
};

export const createItemMap = (items: Item[]): ItemMap<Item> => {
    return items.reduce(
        (acc, item) => {
            return {
                ...acc,
                [item.id]: item,
            };
        },
        {} as ItemMap<Item>,
    );
};
