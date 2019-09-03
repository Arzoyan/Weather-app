import { call, put, takeLatest } from "redux-saga/effects";
import * as Actions from "./Actions";
import { actions } from "./Reducer";
import AuthApi from "../../../api/AuthApi";

export function* getCurrentWeatherData({ payload }) {
    try {
        const response = yield call(AuthApi.getCurrentWeatherData, payload);
        yield put(Actions.CurrentWeatherDataSucceed(response));
    } catch (error) {
        yield put(Actions.CurrentWeatherDataFail());
    }
}

export function* getWeekWeatherData({ payload }) {
    try {
        const response = yield call(AuthApi.getWeekWeatherData, payload);
        yield put(Actions.weekWeatherSuccess(response));
    } catch (error) {
        yield put(Actions.weekWeatherFail());
    }
}

export function* getWeatherCurrentLocation() {
    try {
        const response = yield call(AuthApi.getIPAddress);
        const responseCurrentLocation = yield call(AuthApi.getWeatherWithLocation, response.data.geoplugin_request);

        const responseCurrentCity = yield call(AuthApi.getCurrentWeatherData,  responseCurrentLocation.data.location.capital);
        yield put(Actions.CurrentWeatherDataSucceed(responseCurrentCity));
        const responseWeekData = yield call(AuthApi.getWeekWeatherData,  responseCurrentLocation.data.location.capital);
        yield put(Actions.weekWeatherSuccess(responseWeekData));
    } catch (error) {
        yield put(Actions.CurrentWeatherDataFail());
    }
}

export function* getCurrentLocation() {
    try {
        const response = yield call(AuthApi.getIPAddress);
        const responseCurrentLocation = yield call(AuthApi.getWeatherWithLocation, response.data.geoplugin_request);
        const responseCurrentCity = yield call(AuthApi.getCurrentWeatherData, responseCurrentLocation.data.location.capital);
        yield put(Actions.CurrentWeatherDataSucceed(responseCurrentCity));
    } catch (error) {
        yield put(Actions.CurrentWeatherDataFail());
    }
}

function* Saga() {
    yield takeLatest(actions.GET_CURRENT_EATHER_DATA, getCurrentWeatherData);
    yield takeLatest(actions.GET_WEEK_EATHER_DATA, getWeekWeatherData);
    yield takeLatest(actions.GET_EATHER_DATA_WITH_LOCATION, getWeatherCurrentLocation);
    yield takeLatest(actions.GET_CURRENT_LOCSTION, getCurrentLocation);
}

export default Saga;
