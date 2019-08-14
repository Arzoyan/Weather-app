import axios from "axios";
import {
    REQUEST_TIMEOUT,
} from "../configs/constants";
import { ErrorUtil } from "../helpers/utils/ErrorUtil";
// const queryString = require("query-string");

class HttpInterceptor {
    sessionExpiredCallback;
    throwGlobalError;

    requestInterceptor() {
        axios.interceptors.request.use((config) => {


            // if (config.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            //     config.data = queryString.stringify(config.data);
            // }

            if (!config.timeout) {
                config.timeout = REQUEST_TIMEOUT;
            }

            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
    }
    responseInterceptor() {

        axios.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const errorResponse = error.response;

            if (errorResponse && (errorResponse.status === 401 || errorResponse.status === 403)) {
                if (this.sessionExpiredCallback) {
                    this.sessionExpiredCallback(error);
                }
            }

            if (this.throwGlobalError) {
                this.throwGlobalError(ErrorUtil(error));
            }

            return Promise.reject(ErrorUtil(error));
        });
    }

    init(params) {
        if (params.sessionExpiredCallback) {
            this.sessionExpiredCallback = params.sessionExpiredCallback;
        }

        if (params.throwGlobalError) {
            this.throwGlobalError = params.throwGlobalError;
        }
        this.requestInterceptor();
        this.responseInterceptor();
    }
}

export default new HttpInterceptor();
