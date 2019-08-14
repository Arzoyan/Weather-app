import {createSelector} from "reselect";

const errorStoreSelector = (state) => state.Errors;

export const errorsSelector = createSelector(
    errorStoreSelector, (Errors) => Errors.errors
);

export default state => {
    return {
        errors: errorsSelector(state),
    };
};
