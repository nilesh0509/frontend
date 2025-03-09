import React, { useEffect, useState } from "react";
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity 
} from "react-native";
import { getCategories } from "@/src/services/categoryService";
import Colors from "../../../constants/Colors";

const SERVER_URL = "http://192.168.1.8:8080"; // Server URL for fetching images

export default function Category({ onCategorySelect }) {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        console.log("Fetched Categories:", data); // ✅ Debugging Step
        setCategoryList(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Render each category as a card
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => onCategorySelect(item.name)}
    >
      <Image
        source={{ uri: `${SERVER_URL}${item.imageUrl}` }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color={Colors.PRIMARY} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pet Categories</Text>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id?.toString() || item.id?.toString()} // Fallback for id or _id
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.BOLDS
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 80,       // Circular Image with 80x80 dimension
    height: 80,     
    borderRadius: 20, // Circle shape
    borderWidth: 5,   
    borderColor: Colors.BORDERR, // Light grey border
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600", // Slightly bolder text for clarity
    color: Colors.BOLDS
  },
});













// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { getCategories } from "@/src/services/categoryService";  // Import the API call

// export default function Category({ onCategorySelect }) {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await getCategories();
//         setCategories(data); // Dynamically set categories
//       } catch (error) {
//         console.error("Error loading categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {categories.map((category) => (
//         <TouchableOpacity
//           key={category._id}   // MongoDB uses `_id` as the default unique identifier
//           style={styles.categoryItem}
//           onPress={() => onCategorySelect(category.name)}
//         >
//           <Image
//             source={{ uri: category.imageUrl }}
//             style={styles.categoryImage}
//           />
//           <Text style={styles.categoryText}>{category.name}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//   },
//   categoryItem: {
//     alignItems: "center",
//     marginHorizontal: 5,
//     backgroundColor: "#f3f4f6",
//     padding: 10,
//     borderRadius: 10,
//   },
//   categoryImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: "#ddd",
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: "600",
//   },
// });









// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default function Category({ onCategorySelect }) {
//   const categories = ["Dogs", "Cats", "Birds", "Rabbits"];

//   return (
//     <View style={styles.container}>
//       {categories.map((category) => (
//         <TouchableOpacity
//           key={category}
//           style={styles.categoryItem}
//           onPress={() => onCategorySelect(category)} // ✅ Fixed: Proper callback call
//         >
//           <Text style={styles.categoryText}>{category}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//   },
//   categoryItem: {
//     backgroundColor: "#eee",
//     padding: 10,
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   categoryText: {
//     fontWeight: "bold",
//     fontSize: 14,
//   },
// });


















// import React, { useEffect, useState } from "react";
// import { View, Image, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
// import { getCategories } from "@/src/services/categoryService";
// import Colors from "@/constants/Colors";

// const { width } = Dimensions.get("screen"); // Screen width for responsiveness

// const SERVER_URL = "http://192.168.1.8:8080";

// export default function Category({ onCategorySelect }) {
//   const [categoryList, setCategoryList] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await getCategories();
//         console.log("Fetched Categories:", data);  // ✅ Debugging Step
//         setCategoryList(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleScroll = (event) => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     const index = Math.round(scrollPosition / width);
//     setActiveIndex(index);
//   };

//   const renderCategoryItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.categoryContainer}
//       onPress={() => onCategorySelect(item.name)}
//     >
//       <Image
//         source={{ uri: `${SERVER_URL}${item.imageUrl}` }}
//         style={styles.categoryImage}
//       />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   const renderPagination = () => (
//     <View style={styles.paginationContainer}>
//       {categoryList.map((_, index) => (
//         <View
//           key={index}
//           style={[
//             styles.paginationDot,
//             activeIndex === index ? styles.activeDot : styles.inactiveDot,
//           ]}
//         />
//       ))}
//     </View>
//   );

//   if (loading) {
//     return <ActivityIndicator size="large" color={Colors.PRIMARY} />;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={categoryList}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item._id?.toString() || item.id?.toString()}  // ✅ Fix Applied
//         renderItem={renderCategoryItem}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       />
//       {renderPagination()}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   categoryContainer: {
//     width: width * 0.8,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 15,
//   },
//   categoryImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 15,
//     borderWidth: 3,
//     borderColor: Colors.BORDERR,
//   },
//   categoryText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 5,
//     color: Colors.BOLDS,
//   },
//   paginationContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   paginationDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   activeDot: {
//     backgroundColor: "#1f2937",
//   },
//   inactiveDot: {
//     backgroundColor: "#e5e7eb",
//   },
// });









// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import Colors from '../../../constants/Colors';

// export default function Category() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://192.168.1.8:8080/api/categories');
//       console.log("Pet Category: " , response.data)
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const renderCategoryItem = ({ item }) => (
//     <TouchableOpacity style={styles.categoryItem}>
//       <View style={styles.categoryContainer}>
//         <Image source={{ uri: item.imageUrl }} style={styles.image} />
//         <Text style={styles.categoryName}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Pet Categories</Text>
//       <FlatList
//         data={categories}
//         renderItem={renderCategoryItem}
//         keyExtractor={(item) => item._id.toString()}
//         horizontal
//         contentContainerStyle={styles.categoryListContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 10,
//     color: Colors.BOLDS,
//     fontWeight: 'bold',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     borderColor: Colors.BORDERR,
//     borderWidth: 1,
//     justifyContent: 'center',
//     padding: 5,
//   },
//   categoryListContainer: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   image: {
//     width: 50,
//     height: 30,
//     resizeMode: 'contain',
//   },
//   categoryName: {
//     textAlign: 'center',
//     marginTop: 5,
//     color: Colors.BOLDS,
//     fontWeight: '700',
//   },
// });



//   <TouchableOpacity style={styles.categoryItem}>
// {categories.map((category) => (
//   <View key={category._id} style={styles.categoryContainer}>
//     <Image 
//       source={{ uri: category.imageUrl }} 
//       style={styles.image} 
//     />
//     <Text style={styles.categoryName}>{category.name}</Text>
//   </View>
// ))}
// </TouchableOpacity>







// // const API_URL = "http://100.100.14.105:8080/api";


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
// import axios from 'axios';
// import Colors from './../../../constants/Colors';

// const API_URL = "http://192.168.1.8:8080/api/categories"; // Update with your backend IP
// // const API_URL = "http://100.100.14.105:8080/api/categories"; // Update with your backend IP
// // const API_URL = "http://192.168.59.88:8080/api/categories"; // Update with your backend IP

// export default function Category({ onCategorySelect }) {
//   const [categoryList, setCategoryList] = useState("Dogs");
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     // fetchCategories();
//     fetchCategories().then(setCategoryList);
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       // const res = await axios.get(API_URL);
//       const res = await axios.get(`${API_URL}`);
//       console.log(res.data)
//       return res.data;
//       // setCategoryList(res.data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <Text style={styles.title}>Categories</Text>

//       <ScrollView horizontal contentContainerStyle={styles.categoryListContainer}>
//       <FlatList
//         data={categoryList}
        
//         numColumns={4}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//               <TouchableOpacity
//             // onPress={() => {
//             //   setSelectedCategory(item.name);
//             //   category(item.name);
//             // }}
//             onPress={() => {
//               console.log("Selected category:", item.name);
//               onCategorySelect(item._id)}}
//             style={styles.categoryItem}
//           >
//             <View
//               style={[
//                 styles.categoryContainer,
//                 selectedCategory === item._id && styles.selectedCategoryContainer,
//               ]}
//             >
//               <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
//             </View>
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
          
//         )}
//         />
//         </ScrollView>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   mainContainer: { marginVertical: 15, paddingHorizontal: 10 },
//   title: { fontSize: 20, marginBottom: 10, color: Colors.BOLDS, fontWeight: 'bold' },
//   categoryListContainer: {
//     flexDirection: 'row',
//     // flexWrap: 'wrap',
//     // justifyContent: "center",
//     // alignItems: "center",
//     paddingVertical: 10,
//     // paddingVertical: 10,
//   },
//   categoryItem: {
//     // flex:1,
//     // flexDirection:'row',
//     width: Dimensions.get('window').width / 4 - 20, // Makes the category item responsive
//     alignItems: 'center',
//     // marginBottom: 10,
//     marginRight: 15,
//   },
//   categoryContainer: {
//     padding: 15,
//     margin: 5,
//     alignItems: 'center',
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: Colors.YELLOW,
//   },
//   selectedCategoryContainer: {
//     backgroundColor: Colors.SECONDARY,
//     borderColor: Colors.SECONDARY,
//   },
//   categoryImage: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   categoryText: {
//     textAlign: 'center',
//     marginTop: 5,
//     color: Colors.BOLDS,
//     fontWeight: '700',
//   },
// });

// const styles = StyleSheet.create({
//   mainContainer: { marginVertical: 15, paddingHorizontal: 10 },
//   title: { fontSize: 20, marginBottom: 15, color: Colors.BOLDS, fontWeight: 'bold' },
//   categoryItem: { flex: 1, alignItems: 'center', marginBottom: 10, marginRight:15, },
//   categoryContainer: { padding: 15, margin: 5, alignItems: 'center', borderRadius: 15, borderWidth: 1, borderColor: Colors.YELLOW },
//   selectedCategoryContainer: { backgroundColor: Colors.SECONDARY, borderColor: Colors.SECONDARY },
//   categoryImage: { width: 50, height: 50, resizeMode: 'contain' },
//   categoryText: { textAlign: 'center', marginTop: 5, color: Colors.BOLDS, fontWeight: '700' },

// });

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
// // import { fetchCategories } from "@/services/categoryService";
// import { fetchCategories } from "./../../services/categoryService";
// import { useNavigation } from "@react-navigation/native";
// import { useRouter } from "expo-router"

// export default function Category() {
//   const [categories, setCategories] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     loadCategories();
//   }, []);

//   const loadCategories = async () => {
//     try {
//       const data = await fetchCategories();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error loading categories:", error);
//     }
//   };

//   const router = useRouter();
//   const handleCategoryPress = (category) => {
//     navigation.navigate("PetListByCategory", { category });
//     // router.navigate("PetListByCategory", { category });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Pet Categories</Text>
//       <FlatList
//         data={categories}
//         keyExtractor={(item) => item._id}
//         horizontal
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
//             <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 15,
//     paddingHorizontal: 10,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   categoryItem: {
//     alignItems: "center",
//     marginRight: 15,
//   },
//   categoryImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: "#ddd",
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: "600",
//   },
// });

// import React, { useEffect, useState } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { getCategories } from "./../../services/categoryService";

// export default function Category() {
//   const [categories, setCategories] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const data = await getCategories();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const handleCategoryPress = (category) => {
//     navigation.navigate("PetListByCategory", { category });
//   };

//   const renderCategory = ({ item }) => (
//     <TouchableOpacity onPress={() => handleCategoryPress(item.name)} style={styles.categoryContainer}>
//       <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
//       <Text style={styles.categoryText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Pet Categories</Text>
//       <FlatList
//         data={categories}
//         horizontal
//         keyExtractor={(item) => item._id}
//         renderItem={renderCategory}
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   categoryContainer: {
//     alignItems: "center",
//     marginRight: 15,
//   },
//   categoryImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   categoryText: {
//     marginTop: 5,
//     fontSize: 16,
//   },
// });

// // import { View, Text } from 'react-native'
// // import React from 'react'

// // export default function Category() {
// //   return (
// //     <View>
// //       <Text>Category</Text>
// //     </View>
// //   )
// // }
