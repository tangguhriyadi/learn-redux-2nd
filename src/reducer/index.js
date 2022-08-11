import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import alertReducer from './alert'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged:loggedReducer,
    alert:alertReducer

})
export default allReducers