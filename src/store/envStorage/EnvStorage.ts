export type EnvStorageItemKey = string;

export interface EnvStorage {
    getItem<V>(key: EnvStorageItemKey): IEnvStorageItem<V>;
}

export interface IEnvStorageItem<V = any> {
    setValue(value: V): void;
    getValue(): V;
    clear(): void;
}
