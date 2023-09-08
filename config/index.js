import axios from "axios";

const instance = axios.create({
  baseURL: "https://himatifunib.org/api",
});

instance.interceptors.response.use((response) => response.data);

export default instance;
