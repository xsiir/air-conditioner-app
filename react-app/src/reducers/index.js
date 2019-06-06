import {combineReducers} from "redux";
import airStateReducer from "./airStateReducer";


export default combineReducers({
    airState: airStateReducer,
})