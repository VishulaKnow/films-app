import { createStore, Store } from "redux";
import { rootReducer } from "./reducers/RootReducer";
import { UserState } from "./reducers/UserState";

//TODO: remove duplicate
export interface AppStore {
    user: UserState;
}

export const store: Store<AppStore> = createStore(rootReducer);
