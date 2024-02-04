import axios from "axios";
console.log(process.env.API);

export default axios.create({
    baseURL: process.env.API_KEY,
    headers: { "Content-Type": "application/json" }
})

export const axiosAuth = axios.create({
    baseURL: process.env.API_KEY,
    headers: { "Content-Type": "application/json" }
})