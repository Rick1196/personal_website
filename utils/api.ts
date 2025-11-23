import axios from "axios";
const baseURL = process.env.VERCEL_URL?.length ? `https://${process.env.VERCEL_URL}/` : 'http://localhost:3000/';
const api = {
    getResumeData: () => axios.get<any>(`${baseURL}api/resume`).then(response => response.data),
    getGithubProjects: () => axios.get<any>("https://api.github.com/users/Rick1196/repos").then(response => response.data),
    getArticles: () => axios.get<any>(`${baseURL}api/articles`).then(response => response.data),
}

export default api;