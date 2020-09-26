import React, { Fragment } from "react";
import { SelectionListProps } from "../selection/types";
import SelectionItem from "./selection_item";

const SelectionList = (props: SelectionListProps) => {
    const { handlerFn, itemList, itemType } = props;

    return (
        <Fragment>
            {itemList.map(item => (
                <SelectionItem
                    item={item}
                    itemType={itemType}
                    handler={handlerFn}
                />
            ))}
        </Fragment>
    );
};

export default SelectionList;
