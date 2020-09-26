import React, { useEffect, useState, Fragment } from "react";

// components
import SessionSummary from "./components/summary/summary";
import SelectionList from "./components/selection/selection_list";

// data-related
import { beerList, snackList, wineList } from "../item_data";
import { Beer, ItemType, Item, Snack, Wine } from "./types";

// utils
import { createItemMap, handleSelectItem } from "./app_utils";

import "./app.scss";

const App = () => {
    const [availableBeers, setAvailableBeers] = useState([] as Beer[]);
    const [availableSnacks, setAvailableSnacks] = useState([] as Snack[]);
    const [availableWines, setAvailableWines] = useState([] as Wine[]);

    const [beersSelected, setBeersSelected] = useState([] as Beer[]);
    const [snacksSelected, setSnacksSelected] = useState([] as Snack[]);
    const [winesSelected, setWinesSelected] = useState([] as Wine[]);

    // initial data loading
    useEffect(() => {
        setAvailableBeers(beerList);
        setAvailableWines(wineList);
        setAvailableSnacks(snackList);
    }, []);

    const handleSelectBeer = (beer: Item) => {
        handleSelectItem(beer, beersSelected, setBeersSelected);
    };

    const handleSelectSnack = (snack: Item) => {
        handleSelectItem(snack, snacksSelected, setSnacksSelected);
    };

    const handleSelectWine = (wine: Item) => {
        handleSelectItem(wine, winesSelected, setWinesSelected);
    };

    return (
        <Fragment>
            <SelectionList
                itemType={ItemType.BEER}
                itemList={availableBeers}
                handlerFn={handleSelectBeer}
            />
            <SelectionList
                itemType={ItemType.WINE}
                itemList={availableWines}
                handlerFn={handleSelectWine}
            />
            <SelectionList
                itemType={ItemType.SNACK}
                itemList={availableSnacks}
                handlerFn={handleSelectSnack}
            />
            <SessionSummary
                beerList={createItemMap(beersSelected)}
                wineList={createItemMap(winesSelected)}
                snackList={createItemMap(snacksSelected)}
            />
        </Fragment>
    );
};

export default App;
