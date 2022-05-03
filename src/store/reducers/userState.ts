import { Action } from "redux";
import { ApiKey } from "../../domain/types";

export interface UserState {
    user: ApiKey;
}

const initialState: UserState = {
    user: null
};

type UserActionType = "SET_USER";

const SET_API_KEY_ACTION_TYPE: UserActionType = "SET_USER";

export interface UserAction extends Action<UserActionType> {
    payload: ApiKey;
}

export function userReducer(state = initialState, action: UserAction): UserState {
    if (action.type === SET_API_KEY_ACTION_TYPE) {
        return { user: action.payload };
    }

    return state;
}

export function setUserAction(payload: ApiKey): UserAction {
    return {
        type: SET_API_KEY_ACTION_TYPE,
        payload
    };
}
