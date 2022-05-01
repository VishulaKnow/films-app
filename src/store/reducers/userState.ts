import { ApiKey } from "../../domain/filmDbApi/ApiKey";
import { Action } from "redux";

export interface UserState {
    apiKey: ApiKey;
}

const initialState: UserState = {
    apiKey: null
};

type UserActionType = "SET_API_KEY";

const SET_API_KEY_ACTION_TYPE: UserActionType = "SET_API_KEY";

export interface UserAction extends Action<UserActionType> {
    payload: ApiKey;
}

export function userReducer(state = initialState, action: UserAction): UserState {
    if (action.type === SET_API_KEY_ACTION_TYPE) {
        return { apiKey: action.payload };
    }

    return state;
}

export function setApiKeyAction(payload: ApiKey): UserAction {
    return {
        type: SET_API_KEY_ACTION_TYPE,
        payload
    };
}
