// First we need to import axios.js
import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: "https://localhost:8080/api/v1",
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// Also add/ configure interceptors && all the other cool stuff
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;
