const setLoginState = (isLogged) => (dispatch => setTimeout(() => dispatch({
    type: "LOG",
    payload: isLogged
}), 2000)
);

export {
    setLoginState
};