import authStoreSelector from "../modules/auth/Selector";
import errorsStoreSelector from "../modules/errors/Selector";

export default (state, modules = []) => {
    if (!modules.length) {
        return {
            ...authStoreSelector(state),
            ...errorsStoreSelector(state),
        };
    }

    let stateInProps = {};

    if (modules.includes("auth")) {
        stateInProps = Object.assign({}, stateInProps, {...authStoreSelector(state)});
    }

    if (modules.includes("errors")) {
        stateInProps = Object.assign({}, stateInProps, {...errorsStoreSelector(state)});
    }

    return stateInProps;
};
