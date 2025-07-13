import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "http://192.168.1.72:5005/api",
    headers: {
        "Content-Type": "application/json",
    },
})