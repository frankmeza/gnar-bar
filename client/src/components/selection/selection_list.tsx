import React from "react";
// components
import SelectionItem from "./selection_item";
import { SelectionListProps } from "../selection/types";
// styling
import "./selection.scss";

const ZERO = 0;

const SelectionList = (props: SelectionListProps) => {
    const { handlerFn, itemList, itemType } = props;
    const hasItems = itemList.length > ZERO;

    if (!hasItems) {
        return <div className="empty-selection-list">HAS NONE</div>;
    }

    const itemTypeTitle = `${itemType.toUpperCase()} LIST`;

    return (
        <div className={`selection-list-${itemType}`}>
            <span className="selection-item-type">{itemTypeTitle}</span>

            <div>
                {itemList.map(item => (
                    <SelectionItem
                        handler={handlerFn}
                        item={item}
                        itemType={itemType}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectionList;
