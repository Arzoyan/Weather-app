import {combineReducers} from "redux";
import Auth from "../modules/auth/Reducer";
import Errors from "../modules/errors/Reducer";

export default combineReducers({
    Auth,
    Errors,
});
