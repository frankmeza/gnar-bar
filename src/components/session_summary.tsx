import React, { Fragment } from "react";

import { getAllTabAmounts } from "./utils/shared_utils";
import { Item, ItemMap } from "../types";

export interface SessionSummaryProps {
    readonly beerList: ItemMap<Item>;
    readonly snackList: ItemMap<Item>;
    readonly wineList: ItemMap<Item>;
}

const SessionSummary = (props: SessionSummaryProps) => {
    const { beerList, snackList, wineList } = props;

    const totals = getAllTabAmounts(props);

    const beerNames = Object.values(beerList).map(beer => beer.name);
    const wineNames = Object.values(wineList).map(wine => wine.name);
    const snackNames = Object.values(snackList).map(snack => snack.name);

    return (
        <Fragment>
            <p>TOTALS</p>
            <pre>{JSON.stringify(totals)}</pre>

            <p>SELECTIONS</p>
            <pre>beer: {JSON.stringify(beerNames, null, 4)}</pre>
            <pre>wine: {JSON.stringify(wineNames, null, 4)}</pre>
            <pre>snack: {JSON.stringify(snackNames, null, 4)}</pre>
        </Fragment>
    );
};

export default SessionSummary;
