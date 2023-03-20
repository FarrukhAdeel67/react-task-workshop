import types from "../../actions/Home/types";
const initialState = {
    users: [],
    loggedInUser: false,
}
export function userReducer(state = initialState, { type, payload }) {
    switch (type) {

        case types.FETCH_USERS:
            return {...state, users: payload };
        default:
            return state;
    }
}
export function signUpReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.REGISTER:
            return {...state, users: [...state.users, payload, ], loggedInUser: true, };
            // case types.LOGIN:
            //     return {...state, user: payload };

        default:
            return state;
    }
}