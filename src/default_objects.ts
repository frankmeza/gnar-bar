import {
    BarSnack,
    Beer,
    BeerColor,
    Brewery,
    Producer,
    User,
    UserSession,
    Wine,
    WineColor,
    WineFinish,
} from "./types";

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
    finish: WineFinish.UNKNOWN,
    name: "",
    source: {
        name: "",
        city: "",
        state: "",
    },
    type: "",
};

export const defaultBarSnack: BarSnack = {
    cost: 0,
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
