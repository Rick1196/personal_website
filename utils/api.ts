import axios from "axios";

const api = {
    getResumeData: () => axios.get(`http://localhost:3000/api/resume`)
}

export default api;