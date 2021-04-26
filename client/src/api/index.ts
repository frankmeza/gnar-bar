import { Producer } from "../core_types";
import { getFetch } from "./utils";

const FETCH_PRODUCERS_URL = "http://localhost:8080/producers";

export const fetchProducers = async () => {
    const response = await getFetch(FETCH_PRODUCERS_URL);

    const responseData = response
        .map(successResult => {
            const producers: Producer[] = Object.values(successResult);
            return producers;
        })
        .mapErr(errResult => errResult);

    return responseData;
};
