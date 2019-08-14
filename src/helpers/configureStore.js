import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

export default (rootReducer, rootSaga, storeKey) => {

    let store;

    const sagaMiddleware = createSagaMiddleware();
        store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);

    return store;
};
