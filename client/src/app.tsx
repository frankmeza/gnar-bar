import React, { useEffect, useState, Fragment } from "react";
import { Result } from "neverthrow";
// components
import SessionSummary from "./components/summary/summary";
import SelectionList from "./components/selection/selection_list";
// data
import { beerList, snackList, wineList } from "../item_data";
import { Beer, ItemType, Producer, Snack, Wine } from "./core_types";
import { createItemMap, handleSelectItem } from "./app_utils";
// api
import { fetchProducers } from "./api";
// styling
import "./app.scss";

const App = () => {
    const [availableBeers, setAvailableBeers] = useState<Beer[]>([]);
    const [availableSnacks, setAvailableSnacks] = useState<Snack[]>([]);
    const [availableWines, setAvailableWines] = useState<Wine[]>([]);
    const [producers, setProducers] = useState<Producer[]>([]);

    const [beersSelected, setBeersSelected] = useState<Beer[]>([]);
    const [snacksSelected, setSnacksSelected] = useState<Snack[]>([]);
    const [winesSelected, setWinesSelected] = useState<Wine[]>([]);

    useEffect(() => {
        setAvailableBeers(beerList);
        setAvailableWines(wineList);
        setAvailableSnacks(snackList);
    }, []);

    useEffect(() => {
        alert(JSON.stringify(producers, null, 4));
    }, [producers]);

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
        const result = await fetchProducers();

        if (result.isOk()) {
            setProducers(result.value);
        } else if (result.isErr()) {
            console.log("error: ", JSON.stringify(result.error));
        }
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
            <button onClick={onClickSubmit}>Submit order</button>
        </div>
    );
};

export default App;
