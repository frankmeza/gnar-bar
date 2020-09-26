import React, { Fragment } from "react";

import { getAllTabAmounts } from "./utils/shared_utils";
import { Item, ItemMap } from "../types";

export interface SessionSummaryProps {
    readonly beerList: ItemMap<Item>;
    readonly snackList: ItemMap<Item>;
    readonly wineList: ItemMap<Item>;
}

const SessionSummary = (props: SessionSummaryProps) => {
    const totals = getAllTabAmounts(props);

    return (
        <Fragment>
            <pre>{JSON.stringify(totals, null, 4)}</pre>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </Fragment>
    );
};

export default SessionSummary;
