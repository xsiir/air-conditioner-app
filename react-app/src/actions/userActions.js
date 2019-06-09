const setLoginState = (isLogged) => ({
    type: "LOG",
    payload: isLogged
});

export {
    setLoginState
};