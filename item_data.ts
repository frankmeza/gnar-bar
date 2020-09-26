import {
    Beer,
    BeerColor,
    Snack,
    Wine,
    WineColor,
    WineFinish,
} from "./src/types";

export const beerList: Beer[] = [
    {
        abv: 6,
        color: BeerColor.DARK,
        cost: 6,
        id: "tuan-porter",
        name: "Tuan Porter",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
        type: "Porter",
    },
    {
        abv: 6,
        color: BeerColor.LIGHT,
        cost: 6,
        id: "tuan-blonde",
        name: "Tuan Strawberry Blonde",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
        type: "Porter",
    },
    {
        abv: 6,
        color: BeerColor.RED,
        cost: 6,
        id: "tuan-red-ale",
        name: "Tuan Red Ale",
        type: "Porter",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
    },
];

export const wineList: Wine[] = [
    {
        abv: 6,
        color: WineColor.RED,
        cost: 6,
        finish: WineFinish.DRY,
        id: "tuan-red-dry-wine",
        name: "Tuan red dry wine",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
        type: "red-dry-wine",
    },
    {
        abv: 6,
        color: WineColor.RED,
        cost: 6,
        finish: WineFinish.DRY,
        id: "tuan-blonde",
        name: "Tuan Strawberry Wine",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
        type: "Porter",
    },
    {
        abv: 6,
        color: WineColor.RED,
        cost: 6,
        finish: WineFinish.DRY,
        id: "tuan-red-ale",
        name: "Tuan Red Wine",
        type: "Porter",
        source: {
            name: "Tuan House",
            city: "Long Beach",
            state: "California",
        },
    },
];

export const snackList: Snack[] = [
    {
        cost: 10,
        id: "snackem",
        name: "snackem",
        isDairy: false,
        isVegetarian: false,
    },
];
