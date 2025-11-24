import { default as baseAxios } from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const axios = baseAxios.create({ baseURL: apiUrl, headers:{
    'If-None-Match': undefined
} });
export default axios;