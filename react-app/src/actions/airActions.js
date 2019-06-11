import {AIR_CODITIONE} from "./types";


export function fetchState() {
    return function(dispatch) {
        fetch("http://krancki.ddns.net:9666/api/book")
            .then(response => response.json())
            .then(airState => {
                dispatch({type: AIR_CODITIONE, payload: airState});
            });
    }
}
