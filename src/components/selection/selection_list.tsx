import React, { Fragment } from "react";

// components
import SelectionItem from "./selection_item";

// data-related
import { SelectionListProps } from "../selection/types";

const SelectionList = (props: SelectionListProps) => {
    const { handlerFn, itemList, itemType } = props;

    return (
        <Fragment>
            {itemList.map(item => (
                <SelectionItem
                    handler={handlerFn}
                    item={item}
                    itemType={itemType}
                    key={item.id}
                />
            ))}
        </Fragment>
    );
};

export default SelectionList;
