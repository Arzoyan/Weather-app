import {mainReducer, mainRouter, mainSaga} from "../app/services";
import configureStore from "./configureStore";
import store from "../configs/store";
import HttpInterceptor from  "../api/HttpInterceptor";
import {getAppStore} from "../app/App";
import {throwError} from   "../app/modules/errors/Actions";

export default () => {
    let configs = {
        store: {},
        routes: {}
    };

    configs.store = configureStore(mainReducer, mainSaga, store.storeMainParam);
    configs.routes = mainRouter(configs.store);

    HttpInterceptor.init({
              throwGlobalError: async (error) => {
            await getAppStore().dispatch(throwError(error));
        }
    });


    return configs;
};
