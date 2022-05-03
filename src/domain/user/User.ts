import { ApiKey } from "../types";

export class User {
    constructor(private userKey: ApiKey) {}

    get apiKey() {
        return this.userKey;
    }
}
