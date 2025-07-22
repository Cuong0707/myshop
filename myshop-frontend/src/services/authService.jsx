import axiosInstance from './axiosInstance'

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const  loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}
