import { errAsync, okAsync, Result } from "neverthrow";

type RequestType = "GET" | "POST";

export const fetcher = async (
    requestType: RequestType,
    url: string,
    body?: any,
): Promise<Result<Response, Error>> => {
    const response = await fetch(url, {
        body: body ? JSON.stringify(body) : undefined,
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        method: requestType,
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });

    return response.ok
        ? okAsync(await response.json())
        : errAsync({
              name: `${requestType} fetch error`,
              message: JSON.stringify(response),
          });
};

export const postFetch = async (
    url: string,
    body?: any,
): Promise<Result<Response, Error>> => {
    return fetcher("POST", url, body);
};

export const getFetch = async (
    url: string,
): Promise<Result<Response, Error>> => {
    return fetcher("GET", url);
};
