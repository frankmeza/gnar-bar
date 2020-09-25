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
    readonly name: string;
}

export interface Libation extends Item {
    readonly abv: number;
    readonly type: string;
    readonly source: Brewery | Winery;
}

export enum BeerColor {
    DARK = "dark",
    LIGHT = "light",
    RED = "red",
}

export enum WineFinish {
    SWEET = "sweet",
    DRY = "dry",
}

export enum WineColor {
    RED = "red",
    WHITE = "white",
}

export interface Beer extends Libation {
    readonly color: BeerColor;
}

export interface Wine extends Libation {
    readonly color: WineColor;
    readonly finish: WineFinish;
}

export interface BarSnack extends Item {
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
    readonly user: User;
}
