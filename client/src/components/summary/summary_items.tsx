import React, { Fragment } from "react";
import SummaryItem from "./summary_item";
import { SummaryItemsProps } from "./types";
import { generateSummaryItem } from "../utils/shared_utils";

const SummaryItems = (props: SummaryItemsProps) => {
    const { items } = props;

    const summaryItems = Object.values(items).map(generateSummaryItem);

    return (
        <Fragment>
            {summaryItems.map(summaryItem => (
                <SummaryItem key={summaryItem.id} {...summaryItem} />
            ))}
        </Fragment>
    );
};

export default SummaryItems;
