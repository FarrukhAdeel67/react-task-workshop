import types from "../../actions/Home/types";
const initialState = {
    user: [],
    loggedInUser: false,
    theme:"light",
}

export function logInReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.LOGIN:
            return { ...state, user: payload, 
                loggedInUser:true,
                theme:"dark",
             };
        case "LOGOUT":
            return { ...state, user:null, loggedInUser:false, theme:"light", };

        default:
            return state;
    }
}