import { createStore, Store } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { UserState } from "./reducers/userState";

//TODO: remove duplicate
export interface AppStore {
    user: UserState;
}

export const store: Store<AppStore> = createStore(rootReducer);
