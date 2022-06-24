import { FetcherURL } from "./types";

export const Fetcher = new (class {
    async sendRequest<T = unknown>(url: FetcherURL): Promise<T> {
        const result: Response = await fetch(url);
        return result.json() as unknown as T;
    }
})();
