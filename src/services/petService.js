import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/pets"; // Backend URL
const API_URL = "http://192.168.1.13:8080/api/pets"; // Backend URL

// Fetch pets by category
export const getPetsByCategory = async (category) => {
  try {
    const res = await axios.get(`${API_URL}/category/${category}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error.response?.data?.message || "Failed to fetch pets";
  }
};









// import api from "../config/api";

// export const getAllPets = async () => {
//   const response = await api.get("/pets");
//   return response.data;
// };
