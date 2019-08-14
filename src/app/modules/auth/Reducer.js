export const actions = {
    GET_CURRENT_EATHER_DATA: "GET_CURRENT_EATHER_DATA",
    CURRENT_EATHER_DATA_SUCCESS: "CURRENT_EATHER_DATA_SUCCESS",
    CURRENT_EATHER_DATA_FAIL: "CURRENT_EATHER_DATA_FAIL",

    THIS_WEEK: "THIS_WEEK",
    THIS_DAY_WEATHER: "THIS_DAY_WEATHER",

    GET_WEEK_EATHER_DATA: "GET_WEEK_EATHER_DATA",
    WEEK_EATHER_DATA_SUCCESS: "WEEK_EATHER_DATA_SUCCESS",
    WEEK_EATHER_DATA_FAIL: "WEEK_EATHER_DATA_FAIL",

    GET_EATHER_DATA_WITH_LOCATION: "GET_EATHER_DATA_WITH_LOCATION",

    CLEAR_AUTH_STORE: "CLEAR_AUTH_STORE"
};

const defaultState = {
    currentWeather: null,
    thisWeek: [],
    showData: null,
    cityWeather: null,
    thisDayWeather: null,
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {

        case actions.THIS_WEEK:
            return {
                ...state,
                thisWeek: payload,
            };
        case actions.THIS_DAY_WEATHER:
            return {
                ...state,
                thisDayWeather: payload,
            };

        case actions.CURRENT_EATHER_DATA_SUCCESS:
            let data = { ...payload.data.main, ...payload.data.weather[0] }
            return {
                ...state,
                currentWeather: data,
            };

        case actions.WEEK_EATHER_DATA_SUCCESS:
            return {
                ...state,
                showData: payload.data.list,
            };

        case actions.CLEAR_AUTH_STORE:
            return {
                ...state,
                currentWeather: null,
                showData: null,
                cityWeather: null,
                thisDayWeather: null,
            };
        default:
            return state;
    }
};
