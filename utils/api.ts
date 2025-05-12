import axios from "axios";

const api = {
    getResumeData: () => axios.get<any>(`http://localhost:3000/api/resume`).then(response => response.data)
}

export default api;