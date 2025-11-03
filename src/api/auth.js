import axios from "axios";

const login = async (email, password) => {
    await axios.post("", {
        email: email,
        password: password,
    });
};

export { login };
