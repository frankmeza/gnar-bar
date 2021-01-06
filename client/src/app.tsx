import React, { useEffect, useState, Fragment } from "react";
// components
import SessionSummary from "./components/summary/summary";
import SelectionList from "./components/selection/selection_list";
// data
import { beerList, snackList, wineList } from "../item_data";
import { Beer, ItemType, Snack, Wine } from "./core_types";
import { createItemMap, handleSelectItem } from "./app_utils";
// api
import { submitOrder } from "./api";
// styling
import "./app.scss";

const BUTTON_TEXT = "submit order";

const App = () => {
    const [availableBeers, setAvailableBeers] = useState([] as Beer[]);
    const [availableSnacks, setAvailableSnacks] = useState([] as Snack[]);
    const [availableWines, setAvailableWines] = useState([] as Wine[]);

    const [beersSelected, setBeersSelected] = useState([] as Beer[]);
    const [snacksSelected, setSnacksSelected] = useState([] as Snack[]);
    const [winesSelected, setWinesSelected] = useState([] as Wine[]);

    useEffect(() => {
        setAvailableBeers(beerList);
        setAvailableWines(wineList);
        setAvailableSnacks(snackList);
    }, []);

    const handleSelectBeer = (beer: Beer) => {
        const beers = handleSelectItem(beer, beersSelected);
        setBeersSelected(beers);
    };

    const handleSelectSnack = (snack: Snack): void => {
        const snacks = handleSelectItem(snack, snacksSelected);
        setSnacksSelected(snacks);
    };

    const handleSelectWine = (wine: Wine): void => {
        const wines = handleSelectItem(wine, winesSelected);
        setWinesSelected(wines);
    };

    const onClickSubmit = async () => {
        const result = await submitOrder({
            beersSelected,
            snacksSelected,
            winesSelected,
        });

        confirm(result);
    };

    return (
        <div className="main-container">
            <h1 className="header">The Gnar Bar</h1>
            <div className="list-container">
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
            </div>
            <div className="summary-container">
                <SessionSummary
                    beerList={createItemMap(beersSelected)}
                    wineList={createItemMap(winesSelected)}
                    snackList={createItemMap(snacksSelected)}
                />
            </div>
        </div>
    );
};

export default App;
