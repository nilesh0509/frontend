import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import Category from "./Category";
import PetListItem from "./PetListItem";
import { getPetsByCategory } from "@/src/services/petService";
import Colors from "@/constants/Colors";

export default function PetListByCategory() {
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Default Category - 'Dogs'
  useEffect(() => {
    // fetchPetList("Dogs");
    onCategorySelect("Dogs");
  }, []);

  // ✅ Correctly define `onCategorySelect` function
  const onCategorySelect = async (category) => {
    setLoading(true);
    setPetList([]);
    try {
      const data = await getPetsByCategory(category);
      setPetList(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* ✅ Pass the function as a prop */}
      <Category onCategorySelect={onCategorySelect} />

      {loading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      ) : petList.length > 0 ? (
        <FlatList
          data={petList}
          horizontal
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <PetListItem pet={item} />}
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No pets available in this category.
        </Text>
      )}
    </View>
  );
}









// import React, { useEffect, useState } from "react";
// import { View, FlatList, ActivityIndicator, Text } from "react-native";
// import Category from "./Category";
// import PetListItem from "./PetListItem";
// import { getPetsByCategory } from "@/src/services/petService";
// import Colors from "@/constants/Colors";

// export default function PetListByCategory() {
//   const [petList, setPetList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Default Category - 'Dogs'
//   useEffect(() => {
//     fetchPetList("Dogs");
//   }, []);

//   // Fetch Pets by Selected Category
//   const fetchPetList = async (category) => {
//     setLoading(true);
//     setPetList([]);
//     try {
//       const data = await getPetsByCategory(category);
//       setPetList(data);
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View>
//       <Category category={(value) => fetchPetList(value)} />

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : petList.length > 0 ? (
//         <FlatList
//           data={petList}
//           horizontal
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => <PetListItem pet={item} />}
//           style={{ marginTop: 10 }}
//           showsHorizontalScrollIndicator={false}
//         />
//       ) : (
//         <Text style={{ textAlign: "center", marginTop: 20 }}>
//           No pets available in this category.
//         </Text>
//       )}
//     </View>
//   );
// }









// import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Category from './Category';
// // import { api } from './../../config/api'; 
// import PetListItem from './PetListItem';
// import axios from 'axios';
// import Category from './Category';

// const API_URL = "http://192.168.1.8:8080/api";
// // const API_URL = "http://100.100.14.105:8080/api";
// // const API_URL = "http://192.168.151.88:8080/api";

// export default function PetListByCategory() {
//   const [pets, setPets] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Dogs");

//   // const [petList, setPetList] = useState([]);
//   // const [loader, setLoader] = useState(false);

//   useEffect(() => {
//     if (selectedCategory) {
//       fetchPetsByCategory(selectedCategory).then(setPets);
//     }
//   }, [selectedCategory]);


//   // useEffect(() => {
//   //   fetchPetList('Dogs'); // Default category
//   // }, []);

//   // Fetch pets by category

//   const fetchPetsByCategory = async (categoryId) => {
//     const res = await axios.get(`${API_URL}/pets/category/${categoryId}`);
//     return res.data;
//   };

//   // const fetchPetList = (category) => {
//   //   setLoader(true);
//   //   axios.get(`http://100.100.14.105:8080/api/pets/category/${category}`)
//   //     .then(response => setPetList(response.data))
//   //     .catch(error => console.error("Error fetching pets:", error))
//   //     .finally(() => setLoader(false));
//   // };
  




//   // const fetchPetList = async (category) => {
//   //   setLoader(true);
//   //   try {
//   //     console.log("Fetching pets for category:", category);
//   //     const response = await axios.get(`${API_URL}/pets/category/${category}`) // Fetch pets from API
//   //     console.log("Pets received:", response.data);
//   //     setPetList(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching pets:", error);
//   //   }
//   //   setLoader(false);
//   // };


//   // // Fetch pets by category
//   // const fetchPetList = async (category) => {
//   //   setLoader(true);
//   //   try {
//   //     const response = await api.get(`/pets/category/${category}`); // Fetch pets from API
//   //     setPetList(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching pets:", error);
//   //   }
//   //   setLoader(false);
//   // };

//   return (

//     <View>
//       <Category onCategorySelect={setSelectedCategory} />
//       {loader ? <ActivityIndicator size="large" /> : (
//         <FlatList
//           data={pets}
//           // keyExtractor={(item) => item._id}
//           renderItem={({ item }) => <PetListItem pet={item} />}
//         />
//       )}
//     </View>





//     // <View>

//     //   <Category onCategorySelect={(value) => fetchPetList(value)} />
//     //   {/* <Category category={(value) => fetchPetList(value)} /> */}

//     //   <FlatList
//     //     data={petList}
//     //     style={{ marginTop: 10 }}
//     //     horizontal
//     //     refreshing={loader}
//     //     showsHorizontalScrollIndicator={false}
//     //     onRefresh={() => fetchPetList('Dogs')}
//     //     renderItem={({ item }) => <PetListItem pet={item} />}
//     //   />
//     // </View>
//   );
// }









// import React, { useEffect, useState } from 'react';
// import { View, FlatList } from 'react-native';
// import axios from 'axios';
// import Category from './Category';
// // import PetListItem from './PetListItem';

// const API_URL = "http://192.168.1.3:8080/api/pets";

// export default function PetListByCategory() {
//   const [petList, setPetList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchPets("Dogs"); // Default category
//   }, []);

//   const fetchPets = async (category) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${API_URL}/category/${category}`);
//       setPetList(res.data);
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <View>
//       <Category category={fetchPets} />
//       <FlatList
//         data={petList}
//         style={{ marginTop: 10 }}
//         horizontal
//         refreshing={loading}
//         showsHorizontalScrollIndicator={false}
//         onRefresh={() => fetchPets("Dogs")}
//         renderItem={({ item }) => <PetListItem pet={item} />}
//       />
//     </View>
//   );
// }









// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, StyleSheet } from "react-native";
// import { fetchPetsByCategory } from "@/services/petService";

// export default function PetListByCategory({ route }) {
//   const { category } = route.params;
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     loadPets();
//   }, []);

//   const loadPets = async () => {
//     try {
//       const data = await fetchPetsByCategory(category.name);
//       setPets(data);
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{category.name} Pets</Text>
//       <FlatList
//         data={pets}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.petItem}>
//             <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
//             <Text style={styles.petText}>{item.name}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 10 },
//   header: { fontSize: 22, fontWeight: "bold" },
//   petItem: { marginBottom: 10, alignItems: "center" },
//   petImage: { width: 100, height: 100, borderRadius: 10 },
//   petText: { marginTop: 5 },
// });









// import React, { useEffect, useState } from "react";
// import { View, Text, Image, FlatList, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { getPetsByCategory } from "@/services/categoryService";

// export default function PetListByCategory() {
//   const route = useRoute();
//   const { category } = route.params;
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     try {
//       const data = await getPetsByCategory(category);
//       setPets(data);
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//     }
//   };

//   const renderPet = ({ item }) => (
//     <View style={styles.petContainer}>
//       <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
//       <Text style={styles.petName}>{item.name}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{category} Pets</Text>
//       <FlatList
//         data={pets}
//         keyExtractor={(item) => item._id}
//         renderItem={renderPet}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   petContainer: {
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   petImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   petName: {
//     marginTop: 5,
//     fontSize: 18,
//   },
// });
