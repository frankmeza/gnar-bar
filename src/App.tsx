import React from "react";

import { beerList } from "../beer_data";

import "./app.scss";

const App = () => {
    const beers = JSON.stringify(beerList, null, 4);

    return <pre>{beers}</pre>;
};

export default App;
