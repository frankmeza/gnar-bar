import React, { useState } from "react";

// data-related
import { beerList } from "../beer_data";

// components
import SessionSummary from "./components/session_summary";
import "./app.scss";

const App = () => {
    const [beersSelected, setBeersSelected] = useState()


    return (
        <SessionSummary beers={beerList} />
        //
        );
};

export default App;
