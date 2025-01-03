import axios from "axios";

const API_URL = "http://localhost:8080/api/products/page";

export const fetchProducts = async (offset = 0, limit = 6) =>{
    try{
        const response = await axios.get(`${API_URL}?page=${offset}&size=${limit}`);
        
        return response.data.data;
    }catch (error){
        console.error('Lỗi:'+ error);
        throw error;
    }
};