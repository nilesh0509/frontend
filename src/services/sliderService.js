import axios from "axios";

// const API_URL = "http://192.168.1.8:8080/api/sliders"; // Your backend API URL
// const API_URL = "http://100.100.14.105:8080/api/sliders" ; // Your backend API URL
const API_URL = "http://192.168.1.13:8080/api/sliders" ; // Your backend API URL

// 1️⃣ Fetch all sliders
export const getSliders = async () => {                                                                                 
  try {
    const res = await axios.get(`${API_URL}`);
    console.log("Sliderssss: ", res.data)
    return res.data; // Returns array of sliders
  } catch (error) {
    // console.error(error);
    throw error.response?.data?.message || "Failed to fetch sliders";
  }
};

// 2️⃣ Add a new slider (Admin functionality)
export const addSlider = async (imageUrl) => {
  try {
    const res = await axios.post(`${API_URL}/add`, { imageUrl });
    return res.data; // Returns new slider object
  } catch (error) {
    throw error.response?.data?.message || "Failed to add slider";
  }
};

// 3️⃣ Delete a slider (Admin functionality)
export const deleteSlider = async (sliderId) => {
  try {
    const res = await axios.delete(`${API_URL}/delete/${sliderId}`);
    return res.data; // Success message
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete slider";
  }
};
