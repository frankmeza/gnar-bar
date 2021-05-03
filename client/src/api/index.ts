import { Result } from "neverthrow";
import { Producer, Snack } from "../core_types";
import { FETCH_PRODUCERS_URL, FETCH_SNACKS_URL } from "./url";
import { getFetch } from "./utils";

// todo fix for new json body
export const fetchProducers = async (): Promise<Result<Producer[], Error>> => {
    const response = await getFetch(FETCH_PRODUCERS_URL);

    const producersResponseData = response
        .map(successResult => {
            const producers: Producer[] = Object.values(successResult);
            return producers;
        })
        .mapErr(errResult => errResult);

    return producersResponseData;
};

// todo fix for new json body
export const fetchSnacks = async (): Promise<Result<Snack[], Error>> => {
    const response = await getFetch(FETCH_SNACKS_URL);

    const snacksResponseData = response
        .map(successResult => {
            const snacks: Snack[] = Object.values(successResult);
            return snacks;
        })
        .mapErr(errResult => errResult);

    return snacksResponseData;
};
