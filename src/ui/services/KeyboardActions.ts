export interface KeyboardActionsOnElement {
    primary?(): void;
}

const KEYBOARD_ACTIONS_KEY_CODES = {
    primary: "Enter"
};

export function setKeyboardActions(e: React.KeyboardEvent<HTMLInputElement>, actions: KeyboardActionsOnElement) {
    if (e.code === KEYBOARD_ACTIONS_KEY_CODES.primary) actions.primary?.();
}
