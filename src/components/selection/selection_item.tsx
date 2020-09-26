import React from "react";
import { Item, ItemType } from "../../types";
import { SelectionItemProps } from "./types";

const SelectionItem = (props: SelectionItemProps) => {
    const { item, itemType, handler } = props;
    const { id, name } = item;

    return (
        <pre key={id} onClick={() => handler(item)}>
            {itemType} {name}
        </pre>
    );
};

export default SelectionItem;
