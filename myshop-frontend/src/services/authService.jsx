
import axiosInstance from './axiosInstance'

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
