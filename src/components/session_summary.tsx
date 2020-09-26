import React from "react";
import { Beer } from "../types";

interface SessionSummaryProps {
    readonly beers: Beer[];
}

const SessionSummary = (props: SessionSummaryProps) => {
    const { beers: b } = props;
    const beers = JSON.stringify(b, null, 4);

    return <pre>{beers}</pre>;
};

export default SessionSummary;
