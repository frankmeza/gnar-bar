import React from "react";
import { SummaryItemProps } from "./types";

const SummaryItem = (props: SummaryItemProps) => {
    const { cost, name } = props;

    return (
        <pre>
            {name} {cost}
        </pre>
    );
};

export default SummaryItem;
