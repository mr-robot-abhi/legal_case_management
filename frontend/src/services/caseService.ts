import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getCases = async () => {
  try {
    const response = await axios.get(`${API_URL}/cases`);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch cases";
  }
};

export const createCase = async (caseData: object) => {
  try {
    const response = await axios.post(`${API_URL}/cases`, caseData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to create case";
  }
};
