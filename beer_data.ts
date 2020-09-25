import { Beer, BeerColor } from "./src/core";

export const beerList: ReadonlyArray<Beer> = [
    {
        cost: 6,
        name: "Tuan Porter",
        abv: 6,
        type: "Porter",
        color: BeerColor.DARK,
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
    },
    {
        name: "Tuan Strawberry Blonde",
        type: "Porter",
        color: BeerColor.LIGHT,
        abv: 6,
        cost: 6,
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
    },
    {
        name: "Tuan Red Ale",
        type: "Porter",
        color: BeerColor.RED,
        abv: 6,
        cost: 6,
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
    },
];
