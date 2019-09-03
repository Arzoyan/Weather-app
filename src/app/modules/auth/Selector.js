import { createSelector } from "reselect";

const authStoreSelector = (state) => state.Auth;

export const thisWeekSelector = createSelector(
    authStoreSelector, (Auth) => Auth.thisWeek
);

export const showDataSelector = createSelector(
    authStoreSelector, (Auth) => Auth.showData
);

export const cityWeatherSelector = createSelector(
    authStoreSelector, (Auth) => Auth.currentWeather
);

export const thisDayWeatherSelector = createSelector(
    authStoreSelector, (Auth) => Auth.thisDayWeather
);

export const currentLocationSelector = createSelector(
    authStoreSelector, (Auth) => Auth.currentLocationCity
);

export default state => {
    return {
        thisWeek: thisWeekSelector(state),
        showData: showDataSelector(state),
        currentWeather: cityWeatherSelector(state),
        thisDayWeather: thisDayWeatherSelector(state),
        currentLocationCity: currentLocationSelector(state),
    };
};
