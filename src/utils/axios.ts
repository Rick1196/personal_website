import { default as baseAxios } from "axios";

const axios = baseAxios.create({ baseURL: 'http://localhost:3000', headers:{
    'If-None-Match': undefined
} });
export default axios;