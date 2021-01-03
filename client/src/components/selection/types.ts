import { Item, ItemType } from "../../core_types";

export interface SelectionListProps {
    readonly handlerFn: Function;
    readonly itemList: Item[];
    readonly itemType: ItemType;
}

export interface SelectionItemProps {
    readonly item: Item;
    readonly itemType: ItemType;
    readonly handler: Function;
}
