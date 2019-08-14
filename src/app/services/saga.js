import {all} from "redux-saga/effects";
import AuthSaga from "../modules/auth/Saga";
import ErrorsSaga from "../modules/errors/Saga";

export default function* () {
    yield all([
        AuthSaga(),
        ErrorsSaga(),
    ]);
};
