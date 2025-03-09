import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const API_URL = "http://192.168.1.8:8080/api/auth"; // Change to your backend URL
// const API_URL = "http://100.100.14.105:8080/api/auth"; // Change to your backend URL
const API_URL = "http://192.168.1.13:8080/api/auth"; // Change to your backend URL

// 1️⃣ Register User
export const registerUser = async (name, email, password) => {
  try {
    const res = await axios.post(`${API_URL}/register`, { name, email, password });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// 2️⃣ Login User
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });

    // Save token in AsyncStorage
    await AsyncStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// 3️⃣ Fetch Logged-in User
export const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) return null;

    const res = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// 4️⃣ Logout User
export const logoutUser = async () => {
  await AsyncStorage.removeItem("token");
};









// import api from "../config/api";

// export const registerUser = async (userData) => {
//   const response = await api.post("/auth/register", userData);
//   return response.data;
// };

// export const loginUser = async (userData) => {
//   const response = await api.post("/auth/login", userData);
//   return response.data;
// };

// // export const userInfo = async (token) => {
// //   const response = await api.get("/auth/me", {
// //     headers : { Authorization : `Bearer ${token}`},
// //   });
// //   return response.data;
// // };

