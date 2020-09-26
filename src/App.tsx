import React, { useEffect, useState, Fragment } from "react";

// data-related
import { beerList, wineList } from "../item_data";
import { Beer, ItemType, Item, Wine } from "./types";

// components
import SessionSummary from "./components/session_summary";
import SelectionList from "./components/drinks/item_selection";

// utils
import { createItemMap, handleSelectItem } from "./app_utils";
import "./app.scss";

const App = () => {
    const [availableBeers, setAvailableBeers] = useState([] as Beer[]);
    const [beersSelected, setBeersSelected] = useState([] as Beer[]);

    const [availableWines, setAvailableWines] = useState([] as Wine[]);
    const [winesSelected, setWinesSelected] = useState([] as Wine[]);

    // initial data loading
    useEffect(() => {
        setAvailableBeers(beerList);
        setAvailableWines(wineList);
    }, []);

    const handleSelectBeer = (beer: Item) => {
        handleSelectItem(beer, beersSelected, setBeersSelected);
    };

    const handleSelectWine = (wine: Item) => {
        handleSelectItem(wine, winesSelected, setWinesSelected);
    };

    return (
        <Fragment>
            <SessionSummary
                beerList={createItemMap(beersSelected)}
                wineList={createItemMap(winesSelected)}
            />

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
        </Fragment>
    );
};

export default App;
