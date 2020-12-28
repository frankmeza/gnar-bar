import { submitOrder } from "./api";
import { Beer, Item, ItemMap, Snack, Wine } from "./common_types";

const BEGINNING = 0;
const END = -1;

// todo write tests

export const handleSelectItem = async (
    item: Item,
    itemList: Item[],
    callbackFn: React.Dispatch<React.SetStateAction<any[]>>,
) => {
    const itemIds = itemList.map(item => item.id);
    const indexOfItem = itemIds.indexOf(item.id);
    const isItemSelected = indexOfItem > -1;

    const items =
        isItemSelected ? [
            ...itemList.slice(BEGINNING, indexOfItem),
            ...itemList.slice(indexOfItem, END),
        ] :
        [item, ...itemList];

    callbackFn(items);

    const result = await submitOrder(items);
    return result;
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
