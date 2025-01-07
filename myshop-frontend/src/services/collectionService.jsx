import axios from 'axios';

const API_URL = 'http://localhost:8080/api/collections/';

export const getCollections = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching collections:', error);
        throw error;
    }
};

 