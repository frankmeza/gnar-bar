import React, { Fragment } from "react";
// components
import SummaryItem from "./summary_item";
// data-related
import { SummaryItemsProps } from "./types";
// utils
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
