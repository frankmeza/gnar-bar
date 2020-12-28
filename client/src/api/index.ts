import { Item } from "../common_types";

export const submitOrder = async (items: Item[]) => {
    const response = await Promise.resolve(JSON.stringify({ hellaLit: true }));

    return response;
}
