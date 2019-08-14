export const actions = {
    ERROR_ACQUIRED: "ERROR_ACQUIRED",
    REMOVE_ERROR: "REMOVE_ERROR",
};

const defaultState = {
    errors: null
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case actions.ERROR_ACQUIRED:
            return { ...state,
            errors: payload,
        };

        case actions.REMOVE_ERROR:
            return { ...state,
                errors: null,
            };

        default:
            return state;
    }
};
