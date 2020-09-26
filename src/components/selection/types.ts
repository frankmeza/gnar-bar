import { Item, ItemType } from "../../types";

export type Handler = ((i: Item) => void);

export interface SelectionListProps {
    readonly handlerFn: Handler;
    readonly itemType: ItemType;
    readonly itemList: Item[];
}

export interface SelectionItemProps {
    readonly item: Item;
    readonly itemType: ItemType;
    readonly handler: Handler;
}