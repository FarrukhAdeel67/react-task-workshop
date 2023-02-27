import types from "./types"
export const addToCart = (product)=>{
    return {
        type: types.ADD_CART,
        payload: product,
    }
}
export const deleteFromCart = (id)=>{
    return {
        type: types.DELETE_FROM_CART,
        payload: id,
    }
}