import axiosInstance from "./axiosInstance";

export const fetchProducts = async (offset = 0, limit = 6, sortBy, sortDir, collection, brand, desp) => {
    try {
        let url = `?page=${offset}&size=${limit}`;
        
        if (desp) {
            if (sortBy) url += `&sortBy=${sortBy}`;
            if (sortDir) url += `&sortDir=${sortDir}`;
            if (collection) url += `&collection=${collection}`;
            if (brand) url += `&brand=${brand}`;
        }

        const response = await axiosInstance.get('/products/page'+url);
        
        return response.data.data;
    } catch (error) {
        throw error;
    }
};