import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Request-With": "XMLHttpRequest"
    },
    withCredentials: true
});

export default api;