import axios from "axios";

const url_Base = "https://cysm.pythonanywhere.com";

export default axios.create({
    baseURL: url_Base
})
export const apiPrivate = axios.create({
    baseURL: url_Base,
    headers: { "Content-Type": "aplication/json" },
    withCredentials: true
})