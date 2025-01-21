import axiosInstance from "./axiosInstance";


export const getAllBrands = async () => {
    try {
        const response = await axiosInstance.get('/brand');
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};