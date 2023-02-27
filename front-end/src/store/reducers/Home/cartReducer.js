import types from "../../actions/Home/types"
const initialState = {
    carts: [],
}
export function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.ADD_CART:
            return { ...state, carts: [...state.carts, payload] };
        case types.DELETE_FROM_CART:
            const data = state.carts.filter((el) => el.id !== payload);
            return { ...state, carts:data };
        default:
            return state;
    }
}