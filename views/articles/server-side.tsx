import api from "../../utils/api";

export const preload =()=>{
    void api.getArticles();
}