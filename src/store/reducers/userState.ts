import { Action } from "redux";
import { ApiKey } from "../../domain/types";
import { User } from "../../domain/user/User";
import { ApiKeyItem } from "../envStorage/Items";

interface UserState {
    user: User;
}

const initialState: UserState = {
    user: ApiKeyItem.getValue() ? new User(ApiKeyItem.getValue()) : null
};

type UserActionType = "SET_USER" | "CLEAR_USER";

interface SetUserAction extends Action<UserActionType> {
    type: "SET_USER";
    payload: ApiKey;
}

interface ClearUserAction extends Action<UserActionType> {
    type: "CLEAR_USER";
}

type UserAction = SetUserAction | ClearUserAction;

export function userReducer(state = initialState, action: UserAction): UserState {
    if (action.type === "SET_USER") {
        return { user: new User(action.payload) };
    }
    if (action.type === "CLEAR_USER") {
        return { user: null };
    }

    return state;
}

export function setUserAction(payload: ApiKey): SetUserAction {
    return {
        type: "SET_USER",
        payload
    };
}
