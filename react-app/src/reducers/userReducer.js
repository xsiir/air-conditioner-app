const userReducer = (state = {
    logged: false
}, action) => {
    switch (action.type) {
        case "LOG":
            state = {
                ...state,
                logged: action.payload
            };
            break;
    }

    return state;
};

export default userReducer;