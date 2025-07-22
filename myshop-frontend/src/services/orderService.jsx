import axiosInstance from "./axiosInstance";



export const checkoutOrder = async (checkoutData, clearCartFn) => {
    try {
        const response = await axiosInstance.post('/orders/checkout', checkoutData);
        if (response.data.status === 200) {
            clearCartFn(); 
        }
        return response.data;
    } catch (error) {
        console.error("Error during checkout:", error);
        throw error;
    }
};
export const getOrderHistory = async (userId) => {
    try {
            const response = await axiosInstance.get(`/orders/history/${userId}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching order history:", error);
            throw error;
        }
};
export const getOrderById = async (orderId) => {
  const res = await axiosInstance.get(`/orders/${orderId}`);
  return res.data;
};