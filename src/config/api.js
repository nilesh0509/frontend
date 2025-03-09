import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Base URL of your backend server
// const API_URL = "http://192.168.1.8:8080/api";
const API_URL = "http://100.100.14.105:8080/api";

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept request to attach auth token
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
