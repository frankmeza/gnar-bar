import { errAsync, okAsync, Result } from "neverthrow";

export const postFetch = async (
    url: string,
    body: any,
): Promise<Result<Response, Error>> => {
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body),
    });

    return response.ok
        ? okAsync(await response.json())
        : errAsync({
              name: "post fetch error",
              message: JSON.stringify(response),
          });
};
