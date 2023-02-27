import { cartReducer } from "./Home/cartReducer"
import { productReducer, selectedProductReducer } from "./Home/productReducer";

import { combineReducers } from "redux";
export default combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer,

});