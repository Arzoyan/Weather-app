import { actions } from "./Reducer";

export function thisWeek(data) {
    return { type: actions.THIS_WEEK, payload: data };
}

export function thisDayWeather(data) {
    return { type: actions.THIS_DAY_WEATHER, payload: data };
}

export function getCurrentWeatherData(data) {
    return { type: actions.GET_CURRENT_EATHER_DATA, payload: data };
}

export function CurrentWeatherDataSucceed(data) {
    return { type: actions.CURRENT_EATHER_DATA_SUCCESS, payload: data };
}

export function CurrentWeatherDataFail() {
    return { type: actions.CURRENT_EATHER_DATA_FAIL };
}

export function getWeekWeatherData(data) {
    return { type: actions.GET_WEEK_EATHER_DATA, payload: data };
}

export function weekWeatherSuccess(data) {
    return { type: actions.WEEK_EATHER_DATA_SUCCESS, payload: data };
}

export function weekWeatherFail() {
    return { type: actions.WEEK_EATHER_DATA_FAIL };
}

export function getCurrentLocationWeather() {
    return { type: actions.GET_EATHER_DATA_WITH_LOCATION };
}

export function clearState() {
    return { type: actions.CLEAR_AUTH_STORE };
}