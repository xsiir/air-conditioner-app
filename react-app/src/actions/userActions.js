import axios from 'axios';

const setName = (name) => ({
    type: "SET_NAME",
    payload: name
});

const logout = () => ({
    type: "SET_NAME",
    payload: ""
});

const login = (name) => {
    const url = "https://funkcja1.azurewebsites.net/api/HttpTrigger1?code=aHoMxKb/Uuuz53cpypSVOfX8kY/qCs1E/W8S3rNOkuz1Etgd5sBr0A==";
    const requestBody = { nick: name };
    return function(dispatch) {
        axios.post(url, requestBody).then(users => {
            if (users.length > 0) {
                dispatch({type: "SET_NAME", payload: users[0].name});
            } else {
                dispatch({type: "SET_NAME", payload: ""});
            }
        });
    }
}

export {
    setName,
    logout,
    login
};