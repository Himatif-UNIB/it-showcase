import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => response.data);

export default instance;
