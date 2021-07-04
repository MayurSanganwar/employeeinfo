
const initialState = {
    username: "",
    password: ""
}

function loginReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "USER_LOGIN":
            return { ...state, username: payload };
        case "USER_PASSWORD":
            return {...state,password:payload}
        
        default:
            return state;
    }
}

export default loginReducer