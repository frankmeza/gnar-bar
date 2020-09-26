export interface Producer {
    readonly name: string;
    readonly city: string;
    readonly state: string;
}

export interface Brewery extends Producer {}
export interface Winery extends Producer {}
export interface Kitchen extends Producer {}

export interface Item {
    readonly cost: number;
    readonly id: string;
    readonly name: string;
}

export interface Drink extends Item {
    readonly abv: number;
    readonly type: string;
    readonly source: Brewery | Winery;
}

export enum ItemType {
    BEER = "beer",
    COCKTAIL = "cocktail",
    SNACK = "snack",
    UNKNOWN = "unknown",
    WINE = "wine",
}

export enum BeerColor {
    DARK = "dark",
    LIGHT = "light",
    RED = "red",
    UNKNOWN = "unknown",
}

export interface Beer extends Drink {
    readonly color: BeerColor;
}

export enum WineFinish {
    DRY = "dry",
    SWEET = "sweet",
    UNKNOWN = "unknown",
}

export enum WineColor {
    RED = "red",
    WHITE = "white",
    UNKNOWN = "unknown",
}

export interface Wine extends Drink {
    readonly color: WineColor;
    readonly finish: WineFinish;
}

export interface Snack extends Item {
    readonly isDairy: boolean;
    readonly isVegetarian: boolean;
}

export interface User {
    readonly name: string;
    readonly email: string;
    readonly id: string;
}

export interface UserSession {
    readonly id: string;
    readonly loginTS: number; // unix timestamp
    readonly userId: string;
}
