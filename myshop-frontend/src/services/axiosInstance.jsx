import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.177:8080/api' /*'http://192.168.100.134:8080/api'*/ , 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Nếu backend sử dụng cookie-based authentication
});

export default axiosInstance;
