import { combineReducers } from "redux";

import airStateReducer from "./airStateReducer";
import user from "./userReducer";

export default combineReducers({
    airState: airStateReducer,
    user
});
