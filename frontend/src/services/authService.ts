import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

export const signupUser = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Signup failed";
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/auth/logout`);
    return true;
  } catch (error) {
    throw error.response?.data || "Logout failed";
  }
};
