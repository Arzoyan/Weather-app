export const REQUEST_TIMEOUT = 10 * 1000;
export const API_URL = {
    CURRENT: "http://api.openweathermap.org/data/2.5/weather",
    WEEK: "http://api.openweathermap.org/data/2.5/forecast",
}

export const API_KEY = "420b9c4d2095d7ad6aa5b34e9b0850ad";

export const DATE_FORMAT = "ddd, MMM DD";

export const CITIES = ["Yerevan", "Goris", "Artashat", "London,US", "Manchester,GB", "Libya", "Gana,CM", "Milan,IT", "Lion,FR"];


export const CURRENT_WEEK = () => {
    let currentWeek = [], data,
        mm = new Date().getMonth() + 1;
    let yy = new Date().getFullYear();
    if (mm < 10) {
        mm = `0${mm}`;
    }
    for (let i = 0; i < 6; i++) {
        if ((new Date().getDate() + i) > 30) {
            data = `${yy}-${mm}-${new Date().getDate() + i - 30}`
        } else {
            data = `${yy}-${mm}-${new Date().getDate() + i}`
        }
        currentWeek.push(data)
    }
    return currentWeek
}

export const GENERIC_API_ERROR = "Server has experienced an error, please try again later";
export const NOT_FOUND = 404;
export const FORBIDDEN = 403;
export const VALIDATION_ERROR = 422;

