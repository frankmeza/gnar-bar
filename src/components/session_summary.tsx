import React, { Fragment } from "react";

import { ItemMap } from "../app_utils";
import { Item } from "../types";

interface SessionSummaryProps {
    readonly beerList: ItemMap<Item>;
    readonly wineList: ItemMap<Item>;
    readonly items?: ItemMap<Item>;
}

const SessionSummary = (props: SessionSummaryProps) => {
    return (
        <Fragment>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </Fragment>
    );
};

export default SessionSummary;
