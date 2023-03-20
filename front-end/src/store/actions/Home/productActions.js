import storeApi from "../../../utils/storeApi";
import types from "./types";
import authHeader from "../../../services/auth-header";
export const fetchProducts = () => async(dispatch) => {
    const response = await storeApi.get("/products");
    // console.log(response.data)
    dispatch({
        type: types.FETCH_PRODUCTS,
        payload: response.data,
    });
};
export const setProducts = (products) => {
    return {
        type: types.SET_PRODUCTS,
        payload: products,
    };
};
export const fetchProduct = (id) => async(dispatch) => {
    const response = await storeApi.get(`/products/${id}`, { headers: authHeader() });
    dispatch({
        type: types.SELECTED_PRODUCT,
        payload: response.data,
    });
};
export const selectedProduct = (product) => {
    return {
        type: types.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: types.REMOVE_SELECTED_PRODUCT,
    };
};