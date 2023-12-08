import axios from "axios";

const instance = axios.create({
  baseURL: "https://himatifunib.org/api",
  
  // baseURL: "http://127.0.0.1:8000/api",
});

instance.interceptors.response.use((response) => response.data);

export default instance;
