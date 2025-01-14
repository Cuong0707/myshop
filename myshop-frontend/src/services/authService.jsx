// src/services/authService.js
import axios from "axios";

// URL của API backend Spring Boot
const API_URL = "https://myshop-production-4ea0.up.railway.app/api" || "http://localhost:8080/api/";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
