const source = {
    name: "Tuan House",
    city: "Long Beach",
    state: "California",
};

const beerList = {
    "tuan-porter": {
        abv: 6,
        color: "dark",
        cost: 6,
        id: "tuan-porter",
        name: "Tuan Porter",
        source,
        type: "Porter",
    },
};

const wineList = {
    "tuan-red-dry-wine": {
        abv: 6,
        color: "red",
        cost: 6,
        finish: "dry",
        id: "tuan-red-dry-wine",
        name: "Tuan red dry wine",
        source,
        type: "red-dry-wine",
    },
};

const snackList = {
    snackem: {
        cost: 10,
        id: "snackem",
        name: "snackem",
        isDairy: false,
        isVegetarian: false,
    },
};

export const summaryPropsArguments = {
    beerList,
    snackList,
    wineList,
};
