import axios from "axios";

const API_URL = "http://localhost:4001/api/users";

const signUp = (name, email, password) => {
    console.log(name, email, password)
    return axios
        .post(API_URL + "/signUp ", {
            name,
            email,
            password,
        })
        .then((response) => {
            // if (response.data.accessToken) {
            //     localStorage.setItem("user", JSON.stringify(response.data));
            // }
            // console.log(response.data)
            return response.data;
        });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "/logIn", {
            email,
            password,
        })
        .then((response) => {

            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const authService = {
    signUp,
    login,
};

export default authService;