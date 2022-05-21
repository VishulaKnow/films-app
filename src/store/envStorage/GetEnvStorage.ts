import { EnvStorage } from "./EnvStorage";
import { LocalStorage } from "./LocalStorage";

const defaultStorage: EnvStorage = new LocalStorage();

export function getEnvStorage(): EnvStorage {
    return defaultStorage;
}
