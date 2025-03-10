import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getPayments = async () => {
  try {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch payments";
  }
};

export const makePayment = async (paymentData: object) => {
  try {
    const response = await axios.post(`${API_URL}/payments`, paymentData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Payment failed";
  }
};
