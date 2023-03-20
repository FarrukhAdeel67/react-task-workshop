 import types from "../Home/types";

 import usersApi from "../../../utils/usersApi";

 export const fetchUsers = () => async(dispatch) => {
    const response = await usersApi.get("/getAll");
    // console.log(response.data)
    dispatch({
        type: types.FETCH_USERS,
        payload: response.data,
    });
};
export const registerUser = (name, email, password) => async(dispatch) => {
    const response = await usersApi.post("/signUp", {
        name,
        email,
        password,
    });
    //  console.log(response.data)
    dispatch({
        type: types.REGISTER,
        payload: response.data
        
    });
};