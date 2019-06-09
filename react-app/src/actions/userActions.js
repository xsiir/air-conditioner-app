const setLoginState = (isLogged) => {
    if (isLogged) {
        return dispatch => setTimeout(() => dispatch({
            type: "LOG",
            payload: isLogged
        }), 2000);
    } else {
        return {
            type: "LOG",
            payload: isLogged
        };
    }
};

export {
    setLoginState
};