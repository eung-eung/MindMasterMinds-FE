import axios from "axios";

export default axios.create({
    baseURL: process.env.API,
    headers: { "Content-Type": "application/json" }
})