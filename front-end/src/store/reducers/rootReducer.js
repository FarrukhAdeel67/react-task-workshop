import { cartReducer } from "./Home/cartReducer"
import { productReducer, selectedProductReducer } from "./Home/productReducer";
import { signUpReducer } from "./SignUp/signUpReducer";
import { logInReducer } from "./LogIn/logInReducer";
import { userReducer } from "./SignUp/signUpReducer";

import { combineReducers } from "redux";
export default combineReducers({
    allProducts: productReducer,
    allUsers: userReducer,
    product: selectedProductReducer,
    cartReducer,
    signUpUser: signUpReducer,
    logInUser: logInReducer

});