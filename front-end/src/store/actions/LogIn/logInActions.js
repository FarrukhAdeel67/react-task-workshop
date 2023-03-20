import types from "../Home/types";

import usersApi from "../../../utils/usersApi";

export const logInUser = (email, password) => async(dispatch) => {
    
   const response = await usersApi.post("/logIn", {
       email,
       password,
   });
   console.log("successfully logged in")
    console.log(response.data);
    dispatch({
        type: types.LOGIN,
        payload: response.data
    });
   }