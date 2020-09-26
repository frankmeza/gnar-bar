import {
    Snack,
    Beer,
    BeerColor,
    Brewery,
    Producer,
    User,
    UserSession,
    Wine,
    WineColor,
    WineFinish,
} from "./common_types";

export const defaultProducer: Producer = {
    city: "",
    name: "",
    state: "",
};

export const defaultBrewery: Brewery = {
    ...defaultProducer,
};

export const defaultWinery: Brewery = {
    ...defaultProducer,
};

export const defaultBeer: Beer = {
    abv: 0,
    color: BeerColor.UNKNOWN,
    cost: 0,
    id: "",
    name: "",
    source: {
        name: "",
        city: "",
        state: "",
    },
    type: "",
};

export const defaultWine: Wine = {
    abv: 0,
    color: WineColor.UNKNOWN,
    cost: 0,
    id: "",
    finish: WineFinish.UNKNOWN,
    name: "",
    source: {
        name: "",
        city: "",
        state: "",
    },
    type: "",
};

export const defaultSnack: Snack = {
    cost: 0,
    id: "",
    isDairy: false,
    isVegetarian: false,
    name: "",
};

export const defaultUser: User = {
    name: "",
    email: "",
    id: "",
};

export const defaultUserSession: UserSession = {
    id: "",
    loginTS: 0, // unix timestamp
    userId: "",
};
