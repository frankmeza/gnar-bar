import React from "react";
import { SelectionItemProps } from "./types";

const SelectionItem = (props: SelectionItemProps) => {
    const { item, itemType, handler } = props;
    const { cost, id, name } = item;

    return (
        <div className={`selection-item-${itemType} item-id-${id}`}>
            <p
                className={`selection-item-text-${itemType}`}
                key={id}
                onClick={() => handler(item)}
            >
                {itemType} {name} - ${cost}
            </p>
        </div>
    );
};

export default SelectionItem;
