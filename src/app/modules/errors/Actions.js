import {actions} from "./Reducer";

export function throwError(error) {
    return { type: actions.ERROR_ACQUIRED, payload: error };
}
export function removeError() {
    return { type: actions.REMOVE_ERROR };
}
