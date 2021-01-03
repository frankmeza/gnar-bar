import { Item, ItemMap, ItemType } from "../../core_types";

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
