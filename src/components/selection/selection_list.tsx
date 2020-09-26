import React, { Fragment } from "react";
import { Item, ItemType } from "../../types";
import { Handler, SelectionListProps } from "../summary/types";

const renderSelectionItem = (
    item: Item,
    itemType: ItemType,
    handler: Handler,
) => {
    const { id, name } = item;

    return (
        <pre key={id} onClick={() => handler(item)}>
            {itemType} {name}
        </pre>
    );
};

const SelectionList = (props: SelectionListProps) => {
    const { handlerFn, itemList, itemType } = props;

    const selections = itemList.map(item =>
        renderSelectionItem(item, itemType, handlerFn),
    );

    return <Fragment>{selections}</Fragment>;
};

export default SelectionList;
