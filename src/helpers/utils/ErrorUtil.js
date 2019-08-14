import {
    FORBIDDEN,
    GENERIC_API_ERROR,
    NOT_FOUND,
    VALIDATION_ERROR
} from "../../configs/constants";


export const ErrorUtil = (error) => {
    const errorResponse = error.response;
    let result = [];
    if (errorResponse) {
        const { status, data, statusText } = errorResponse;

        switch (status) {
            case FORBIDDEN:
                result.push(data.error.message);
                break;
            case VALIDATION_ERROR:
                result.push(data.message);
                Object.keys(data.errors).forEach(key => {
                    result.push(data.errors[key].message);
                });
                break;
            case NOT_FOUND:
                if (data.message) {
                    result.push(data.message);
                } else {
                    result.push(GENERIC_API_ERROR);
                }
                break;
            default:
                if (data.message) {
                    result.push(data.message);
                } else {
                    result.push(statusText);
                }
        }

        return result;
    }

    return [error.message];
};
