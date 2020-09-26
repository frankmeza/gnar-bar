import React from "react";
import { SummaryItemProps } from "./types";

const SummaryItem = (props: SummaryItemProps) => {
    const { cost, id, name } = props;

    return (
        <pre key={id}>
            {name} {cost}
        </pre>
    );
};

export default SummaryItem;
