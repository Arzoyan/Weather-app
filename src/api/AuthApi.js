import axios from "axios";
import { API_URL, API_KEY } from "../configs/constants";

export default class AuthApi {
    static getCurrentWeatherData(data) {
        return axios.request({
            url: `${API_URL.CURRENT}?q=${data}&APPID=${API_KEY}`,
            method: "GET",
        });
    }

    static getWeekWeatherData(data) {
        return axios.request({
            url: `${API_URL.WEEK}?q=${data}&APPID=${API_KEY}`,
            method: "GET",
        });
    }

    static getWeatherWithLocation(data) {
        return axios.request({
            url: `http://api.ipstack.com/${data}?access_key=bcdf7ae470e9e1c52ab960c567832cbd`,
            method: "GET",
        });
    }

    static getIPAddress() {
        return axios.request({
            url: `http://www.geoplugin.net/json.gp`,
            method: "GET",
        });
    }


}
