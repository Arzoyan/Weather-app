import {put, select, takeLatest, delay} from "redux-saga/effects";
import * as Actions from "./Actions";
import {actions} from "./Reducer";
import {errorsSelector} from "./Selector";

export function* throwError() {
    yield delay(6000);
    if (yield select(errorsSelector)) {
        yield put(Actions.removeError());
    }
}

function* Saga() {
    yield takeLatest(actions.ERROR_ACQUIRED, throwError);
}

export default Saga;
