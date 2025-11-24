import axios from "./axios";

const api = {
    getFacts: async () => {
        const response = await axios.get(`/resume/facts`);
        return response;
    },
    getExperiences: async () => {
        const response = await axios.get(`/resume/experiences`);
        return response;
    }
}

export default api;