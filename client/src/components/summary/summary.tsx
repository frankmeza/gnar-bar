import React, { Fragment } from "react";
import SummaryItems from "./summary_items";
import { SummaryProps } from "./types";
import { ItemType } from "../../common_types";
import { getAllTabAmounts } from "../utils/shared_utils";

const Summary = (props: SummaryProps) => {
    const { beerList, snackList, wineList } = props;

    const totals = getAllTabAmounts(props);

    return (
        <Fragment>
            <p>SELECTIONS</p>
            <SummaryItems itemType={ItemType.BEER} items={beerList} />
            <SummaryItems itemType={ItemType.WINE} items={wineList} />
            <SummaryItems itemType={ItemType.SNACK} items={snackList} />

            <p>TOTALS</p>
            <pre>{JSON.stringify(totals)}</pre>
        </Fragment>
    );
};

export default Summary;