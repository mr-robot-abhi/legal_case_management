import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getChatMessages = async (caseId: string) => {
  try {
    const response = await axios.get(`${API_URL}/chat/${caseId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch messages";
  }
};

export const sendMessage = async (caseId: string, message: string) => {
  try {
    const response = await axios.post(`${API_URL}/chat/${caseId}`, { message });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to send message";
  }
};
