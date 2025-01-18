import axios from 'axios';

const API_URL ='http://192.168.100.134:8080/api/brand';

export const getAllBrands = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};