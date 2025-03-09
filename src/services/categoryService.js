import axios from "axios";

const API_URL = "http://192.168.1.13:8080/api/categories";


// ✅ Fetch categories from the database
export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Returns the array of categories
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error.response?.data?.message || "Failed to fetch categories";
  }
};

// // ✅ 1. Fetch all categories
// export const getCategories = async () => {
//   try {
//     const res = await axios.get(API_URL);
//     return res.data; // Returns category data
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to fetch categories";
//   }
// };

// ✅ 2. Add a new category (Admin functionality)
export const addCategory = async (name, imageUrl) => {
  try {
    const res = await axios.post(API_URL, { name, imageUrl });
    return res.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to add category";
  }
};









// import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/categories"; // Replace with your server IP
// // const API_URL = "http://100.100.14.105:8080/api/categories"; // Replace with your server IP
// // const API_URL = "http://192.168.151.88:8080/api/categories"; // Replace with your server IP

// // Fetch all categories
// export const fetchCategories = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// };







// import axios from "axios";

// const API_URL = "http://192.168.1.3:8080/api";

// // Fetch categories
// export const getCategories = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/categories`);
//     return res.data;
//   } catch (error) {
//     throw error.response.data.message;
//   }
// };

// // Fetch pets by category
// export const getPetsByCategory = async (category) => {
//   try {
//     const res = await axios.get(`${API_URL}/pets/category/${category}`);
//     return res.data;
//   } catch (error) {
//     throw error.response.data.message;
//   }
// };
