import axios from "axios";
const BASE_URL = 'https://fmp-api.azurewebsites.net';

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
})