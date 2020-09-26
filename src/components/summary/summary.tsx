import React, { Fragment } from "react";

// components
import SummaryItem from "./summary_item";

// data-related
import { SummaryProps } from "./types";

// utils
import {
    generateSummaryItemList,
    getAllTabAmounts,
} from "../utils/shared_utils";

const Summary = (props: SummaryProps) => {
    const { beerList, snackList, wineList } = props;

    const totals = getAllTabAmounts(props);

    const beerSummaryItems = Object.values(beerList).map(
        generateSummaryItemList,
    );

    const wineSummaryItems = Object.values(wineList).map(
        generateSummaryItemList,
    );

    const snackSummaryItems = Object.values(snackList).map(
        generateSummaryItemList,
    );

    return (
        <Fragment>
            <p>SELECTIONS</p>

            {beerSummaryItems.map(summaryItem => (
                <SummaryItem {...summaryItem} />
            ))}

            {wineSummaryItems.map(summaryItem => (
                <SummaryItem {...summaryItem} />
            ))}

            {snackSummaryItems.map(summaryItem => (
                <SummaryItem {...summaryItem} />
            ))}

            <p>TOTALS</p>
            <pre>{JSON.stringify(totals)}</pre>
        </Fragment>
    );
};

export default Summary;
