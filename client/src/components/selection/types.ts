import { Item, ItemType } from "../../core_types";

export type ItemHandler<T extends Item> = (beer: T) => void

export interface SelectionListProps<T extends Item> {
    readonly handlerFn: ItemHandler<T>;
    readonly itemType: ItemType;
    readonly itemList: Item[];
}

interface SelectionItem extends Item {
    color?: any
}

export interface SelectionItemProps<T extends Item> {
    readonly item: SelectionItem;
    readonly itemType: ItemType;
    readonly handler: ItemHandler<T>;
}
