import axios from "../api/axiosConfig.js";

const login = async (email, password) => {
    return await axios.post("/auth/login", {
        email: email,
        password: password,
    });
};

export { login };
