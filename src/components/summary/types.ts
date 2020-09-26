import { Item, ItemMap, ItemType } from "../../types";

export type Handler = ((i: Item) => void);

export interface SelectionListProps {
    readonly handlerFn: Handler;
    readonly itemType: ItemType;
    readonly itemList: Item[];
}

export interface SummaryProps {
    readonly beerList: ItemMap<Item>;
    readonly snackList: ItemMap<Item>;
    readonly wineList: ItemMap<Item>;
}

export interface SummaryItemProps {
    readonly cost: number;
    readonly id: string;
    readonly name: string;
}

export interface SummaryItemsProps {
    readonly itemType: ItemType;
    readonly items: ItemMap<Item>;
}
