import React from "react";
// components
import { SelectionItemProps } from "./types";

const SelectionItem = (props: SelectionItemProps) => {
    const { item, itemType, handler } = props;
    const { cost, id, name } = item;

    const onClick = () => handler(item);

    return (
        <div className={`selection-item-${itemType} item-id-${id}`}>
            <p
                className={`selection-item-text`}
                key={id}
                onClick={onClick}
            >
                <span className={`selection-item-type-${name}`}>{name} - </span>
                <span className={`selection-item-type-${cost}`}>{cost}</span>
            </p>
        </div>
    );
};

export default SelectionItem;
