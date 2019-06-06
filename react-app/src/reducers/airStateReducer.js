import {AIR_CODITIONE} from "../actions/types";

export default function reducer(state={},action){

    switch (action.type) {
        case AIR_CODITIONE :{
            state = {...state, airState: action.payload}
        }
    }
    return state;
}