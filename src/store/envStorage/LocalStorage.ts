import { EnvStorage, IEnvStorageItem } from "./EnvStorage";

export class LocalStorage implements EnvStorage {
    getItem<V>(key: string): IEnvStorageItem<V> {
        return {
            getValue() {
                return JSON.parse(localStorage.getItem(key)) as V;
            },
            setValue(value: V) {
                localStorage.setItem(key, JSON.stringify(value));
            },
            clear() {
                localStorage.removeItem(key);
            }
        };
    }
}
