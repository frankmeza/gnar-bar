import { Item, ItemMap } from "../../types";
import { SessionSummaryProps } from "../session_summary";

interface TabTotals {
    readonly beerTab: number;
    readonly snackTab: number;
    readonly wineTab: number;
    readonly total: number;
}

const getTabAmount = (itemMap: ItemMap<Item>) => {
    const itemList = Object.values(itemMap);

    const total = itemList.reduce((acc, item) => {
        return acc + item.cost;
    }, 0);

    return total;
};

export const getAllTabAmounts = (props: SessionSummaryProps): TabTotals => {
    const { beerList, snackList, wineList } = props;

    const beerTab = getTabAmount(beerList);
    const snackTab = getTabAmount(snackList);
    const wineTab = getTabAmount(wineList);
    const total = beerTab + snackTab + wineTab;

    return {
        beerTab,
        snackTab,
        wineTab,
        total,
    };
};
