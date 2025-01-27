import axios from "axios";

export const axiosinstance = axios.create({
    baseURL : "https://localhost:2000"
});