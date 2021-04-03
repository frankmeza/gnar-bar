import { err, ok, Result } from "neverthrow";

import { Beer, Snack, Wine } from "../core_types";
import { postFetch } from "./utils";

type OrderParams = {
    beersSelected: Beer[];
    snacksSelected: Snack[];
    winesSelected: Wine[];
};

const SUBMIT_ORDER_URL = "http://localhost:8080/submit_order";

// export const submitOrder = async (order: OrderParams) => {
//     const response = await postFetch(SUBMIT_ORDER_URL, order);

//     const result = response.ok ? order : { error: true };
//     return JSON.stringify(result);
// };

export const submitOrder = async (order: OrderParams) => {
    const response = await postFetch(SUBMIT_ORDER_URL, order);

    if (response.isOk()) {
        debugger
    } else if (response.isErr()) {
        debugger
    }
        // .map(responseData => {
        //     return response.unwrapOr("")
        // })
        // .mapErr(responseError => responseError.message);

    // return response
};
