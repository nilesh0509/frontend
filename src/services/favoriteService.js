import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/favorites";
const API_URL = "http://192.168.1.13:8080/api/favorites";

// Get all favorite pets for the current user
export const getFavoritePets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching favorite pets:", error);
    throw error.response?.data?.message || "Failed to fetch favorite pets";
  }
};

// Add a pet to favorites
export const addToFavorites = async (petId) => {
  try {
    const response = await axios.post(API_URL, { petId });
    return response.data;
  } catch (error) {
    console.error("Error adding pet to favorites:", error);
    throw error.response?.data?.message || "Failed to add pet to favorites";
  }
};

// Remove a pet from favorites
export const removeFavorite = async (petId) => {
  try {
    const response = await axios.delete(`${API_URL}/${petId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing pet from favorites:", error);
    throw error.response?.data?.message || "Failed to remove pet from favorites";
  }
};

// Check if a pet is in the user's favorites
export const checkIfFavorite = async (petId) => {
  try {
    const response = await axios.get(`${API_URL}/check/${petId}`);
    return response.data.isFavorite;
  } catch (error) {
    console.error("Error checking favorite status:", error);
    return false; // Default to false if there's an error
  }
};








// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const API_URL = "http://192.168.1.8:8080/api/favourites";

// // Helper function to get the token
// const getToken = async () => {
//   return await AsyncStorage.getItem("userToken");
// };

// // ✅ Add to favourites
// export const addFavourite = async (pet) => {
//   try {
//     const token = await getToken();
//     const response = await axios.post(API_URL, { petId: pet._id, petDetails: pet }, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to add favourite.";
//   }
// };

// // ✅ Fetch all favourites
// export const getFavourites = async () => {
//   try {
//     const token = await getToken();
//     const response = await axios.get(API_URL, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to fetch favourites.";
//   }
// };

// // ✅ Remove from favourites
// export const removeFavourite = async (petId) => {
//   try {
//     const token = await getToken();
//     await axios.delete(`${API_URL}/${petId}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return "Favourite removed successfully";
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to remove favourite.";
//   }
// };






// import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/favourites";

// // ✅ Add to favourites
// export const addFavourite = async (userId, pet) => {
//   try {
//     const response = await axios.post(API_URL, { userId, petId: pet._id, petDetails: pet });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to add favourite.";
//   }
// };

// // ✅ Remove from favourites
// export const removeFavourite = async (userId, petId) => {
//   try {
//     await axios.delete(`${API_URL}/${userId}/${petId}`);
//     return "Favourite removed successfully";
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to remove favourite.";
//   }
// };

// // ✅ Fetch all favourites
// export const getFavourites = async (userId) => {
//   try {
//     const response = await axios.get(`${API_URL}/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Failed to fetch favourites.";
//   }
// };









// import AsyncStorage from "@react-native-async-storage/async-storage";

// const FAVOURITES_KEY = "favouritePets";

// // ✅ Add a pet to favourites
// export const addFavouritePet = async (pet) => {
//   try {
//     const favourites = await getFavouritePets();
//     const updatedFavourites = [...favourites, pet];
//     await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
//   } catch (error) {
//     console.error("Error adding favourite pet:", error);
//   }
// };

// // ✅ Remove a pet from favourites
// export const removeFavouritePet = async (petId) => {
//   try {
//     const favourites = await getFavouritePets();
//     const updatedFavourites = favourites.filter((pet) => pet._id !== petId);
//     await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(updatedFavourites));
//   } catch (error) {
//     console.error("Error removing favourite pet:", error);
//   }
// };

// // ✅ Fetch favourite pets
// export const getFavouritePets = async () => {
//   try {
//     const favourites = await AsyncStorage.getItem(FAVOURITES_KEY);
//     return favourites ? JSON.parse(favourites) : [];
//   } catch (error) {
//     console.error("Error fetching favourite pets:", error);
//     return [];
//   }
// };









// import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/favorites";  // Replace with your server IP

// // ✅ Fetch all favorite pets for a user
// export const getFavorites = async (userId) => {
//   try {
//     const response = await axios.get(`${API_URL}/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching favorites:", error);
//     throw error.response?.data?.message || "Failed to fetch favorites";
//   }
// };

// // ✅ Toggle (Add/Remove) a pet from favorites
// export const toggleFavorite = async (userId, petId) => {
//   try {
//     const response = await axios.post(`${API_URL}/toggle`, { userId, petId });
//     return response.data;
//   } catch (error) {
//     console.error("Error toggling favorite:", error);
//     throw error.response?.data?.message || "Failed to toggle favorite";
//   }
// };









// import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/favorites"; // Your backend API URL

// // ✅ Toggle Favorite
// export const toggleFavorite = async (userId, petId) => {
//   try {
//     const res = await axios.post(`${API_URL}/toggle`, { userId, petId });
//     return res.data;
//   } catch (error) {
//     console.error("Error toggling favorite:", error);
//     throw error.response?.data?.message || "Failed to toggle favorite";
//   }
// };

// // ✅ Get Favorite Pets
// export const getFavoritePets = async (userId) => {
//   try {
//     const res = await axios.get(`${API_URL}/${userId}`);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching favorites:", error);
//     throw error.response?.data?.message || "Failed to fetch favorite pets";
//   }
// };









// import axios from "axios";

// const API_URL = "http://localhost:8080/api/favorites"; // Your backend API URL

// // ✅ Toggle Favorite
// export const toggleFavorite = async (userId, petId) => {
//   try {
//     const res = await axios.post(`${API_URL}/toggle`, { userId, petId });
//     return res.data;
//   } catch (error) {
//     console.error("Error toggling favorite:", error);
//     throw error.response?.data?.message || "Failed to toggle favorite";
//   }
// };

// // ✅ Get Favorite Pets
// export const getFavoritePets = async (userId) => {
//   try {
//     const res = await axios.get(`${API_URL}/${userId}`);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching favorites:", error);
//     throw error.response?.data?.message || "Failed to fetch favorites";
//   }
// };
