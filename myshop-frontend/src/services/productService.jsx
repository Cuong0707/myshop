import axios from "axios";

const API_URL = "http://192.168.100.134:8080/api/products/page";

export const fetchProducts = async (offset = 0, limit = 6, sortBy, sortDir, collection, brand, desp) => {
    try {
        let url = `${API_URL}?page=${offset}&size=${limit}`;
        
        if (desp) {
            if (sortBy) url += `&sortBy=${sortBy}`;
            if (sortDir) url += `&sortDir=${sortDir}`;
            if (collection) url += `&collection=${collection}`;
            if (brand) url += `&brand=${brand}`;
        }

        const response = await axios.get(url);
        
        return response.data.data;
    } catch (error) {
        console.error('Lỗi:' + error);
        throw error;
    }
};