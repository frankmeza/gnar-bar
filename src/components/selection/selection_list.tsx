import React, { Fragment } from "react";
import { Beer, Item, ItemType } from "../../types";

type Handler = ((i: Item) => void);

interface SelectionListProps {
    readonly handlerFn: Handler;
    readonly itemType: ItemType;
    readonly itemList: Item[];
}

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
