import axiosInstance from "./axiosInstance";

export const getCollections = async () => {
    try {
        const response = await axiosInstance.get('/collections/');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
};

 