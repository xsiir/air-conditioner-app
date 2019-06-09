const setName = (name) => ({
    type: "SET_NAME",
    payload: name
});

const logout = () => ({
    type: "SET_NAME",
    payload: ""
});

export {
    setName,
    logout
};