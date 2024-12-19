import axios from "axios";

const API_URL = "";

export const fetchProducts = async (offset = 0, limit = 6) =>{
    try{
        const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
        return response.data;
    }catch (error){
        console.error('Lỗi:'+ error);
        throw error;
    }
};