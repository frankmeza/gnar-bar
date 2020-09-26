import { Item, ItemType } from "../../common_types";

export type ItemHandler = ((i: Item) => void);

export interface SelectionListProps {
    readonly handlerFn: ItemHandler;
    readonly itemType: ItemType;
    readonly itemList: Item[];
}

export interface SelectionItemProps {
    readonly item: Item;
    readonly itemType: ItemType;
    readonly handler: ItemHandler;
}