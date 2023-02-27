import types from "../../actions/Home/types";
const initialState = {
    products: [],
}
export function productReducer(state = initialState, { type, payload }) {
    switch (type) {
        case types.SET_PRODUCTS:
            return {...state, products: payload };
        case types.FETCH_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
}
export function selectedProductReducer(state = {}, { type, payload }) {
    switch (type) {
        case types.SELECTED_PRODUCT:
            return {...state, ...payload }
        case types.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}