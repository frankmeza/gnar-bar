import React from "react";
import { SummaryItemProps } from "./types";
import "./summary.scss"

const SummaryItem = (props: SummaryItemProps) => {
    const { cost, id, name } = props;

    return (
        <pre className="summary-items" key={id}>
            {name} {cost}
        </pre>
    );
};

export default SummaryItem;
