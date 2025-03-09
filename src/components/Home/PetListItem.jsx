import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "./../../../constants/Colors";
import { addToFavorites, removeFavorite, checkIfFavorite } from "../../services/favoriteService";

export default function PetListItem({ pet, isFavorite: initialFavorite, onFavoriteToggle }) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite || false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if pet is in favorites when component mounts
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (initialFavorite === undefined) {
        try {
          const status = await checkIfFavorite(pet._id);
          setIsFavorite(status);
        } catch (error) {
          console.error("Error checking favorite status:", error);
        }
      }
    };

    checkFavoriteStatus();
  }, [pet._id, initialFavorite]);


  // Modified PetListItem.jsx toggleFavorite function
const toggleFavorite = async () => {
  if (isLoading) return;
  
  setIsLoading(true);
  try {
    // Check if user is authenticated
    const token = await AsyncStorage.getItem("authToken");
    
    if (!token) {
      // Show login prompt instead of adding to favorites
      Alert.alert(
        "Authentication Required",
        "Please log in to save favorites",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Go to Login", 
            onPress: () => navigation.navigate("Login") // Adjust to your navigation setup
          }
        ]
      );
      setIsLoading(false);
      return;
    }
    
    // User is authenticated, proceed with favorite action
    if (isFavorite) {
      await removeFavorite(pet._id);
    } else {
      await addToFavorites(pet._id);
    }
    
    setIsFavorite(!isFavorite);
    
    if (onFavoriteToggle) {
      onFavoriteToggle(pet._id, !isFavorite);
    }
  } catch (error) {
    console.error("Error toggling favorite:", error);
    
    // Handle expired token or other auth issues
    if (error.response?.status === 401) {
      Alert.alert(
        "Session Expired",
        "Please log in again to continue",
        [
          {
            text: "OK",
            onPress: () => {
              // Clear token and redirect to login
              AsyncStorage.removeItem("authToken");
              navigation.navigate("Login"); // Adjust to your navigation setup
            }
          }
        ]
      );
    }
  } finally {
    setIsLoading(false);
  }
};

  // const toggleFavorite = async () => {
  //   if (isLoading) return;
    
  //   setIsLoading(true);
  //   try {
  //     if (isFavorite) {
  //       await removeFavorite(pet._id);
  //     } else {
  //       await addToFavorites(pet._id);
  //     }
      
  //     setIsFavorite(!isFavorite);
      
  //     // Call the parent component's handler if provided
  //     if (onFavoriteToggle) {
  //       onFavoriteToggle(pet._id, !isFavorite);
  //     }
  //   } catch (error) {
  //     console.error("Error toggling favorite:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: pet.imageUrl }}
        style={styles.petImage}
      />
      <TouchableOpacity 
        onPress={toggleFavorite} 
        style={styles.favoriteIcon}
        disabled={isLoading}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? Colors.BOLDS : Colors.GRAY}
        />
      </TouchableOpacity>

      <View style={styles.petDetails}>
        <Text style={styles.petName}>{pet.name}</Text>
        <Text style={styles.petBreed}>{pet.breed}</Text>
        <Text style={styles.petAge}>{pet.age} years old</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 160, // Fixed width for uniform cards
  },
  petImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 12,
    padding: 4,
  },
  petDetails: {
    marginTop: 8,
  },
  petName: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.TEXT_BOLD,
  },
  petBreed: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
  },
  petAge: {
    fontSize: 12,
    color: Colors.TEXT_LIGHT,
    marginTop: 3,
  },
});








// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Colors from "./../../../constants/Colors";
// import {
//   addFavouritePet,
//   removeFavouritePet,
//   getFavouritePets
// } from "../../services/favoriteService"
// import AntDesign from '@expo/vector-icons/AntDesign';

// export default function PetListItem({ pet }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   // ✅ Check if the pet is already a favourite
//   useEffect(() => {
//     const checkFavourites = async () => {
//       const favourites = await getFavouritePets();
//       setIsFavorite(favourites.some((favPet) => favPet._id === pet._id));
//     };
//     checkFavourites();
//   }, [pet]);

//   // ✅ Toggle favourite status
//   const toggleFavorite = async () => {
//     if (isFavorite) {
//       await removeFavouritePet(pet._id);
//     } else {
//       await addFavouritePet(pet);
//     }
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: pet.imageUrl }} style={styles.petImage} />
//       <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
//         {/* <Ionicons
//           name={isFavorite ? "heart" : "heart-outline"}
//           size={24}
//           color={isFavorite ? Colors.BOLDS : Colors.GRAY}
//         /> */}
//         <AntDesign name={isFavorite ? "heart" : "hearto"} size={24}
//         color={isFavorite ? "red" : "gray"} />
        
//       </TouchableOpacity>

//       <View style={styles.petDetails}>
//         <Text style={styles.petName}>{pet.name}</Text>
//         <Text style={styles.petBreed}>{pet.breed}</Text>
//         <Text style={styles.petAge}>{pet.age} years old</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 10,
//     margin: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     width: 160,
//   },
//   petImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 10,
//   },
//   favoriteIcon: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//   },
//   petDetails: {
//     marginTop: 8,
//   },
//   petName: {
//     fontWeight: "bold",
//     fontSize: 16,
//     color: Colors.TEXT_BOLD,
//   },
//   petBreed: {
//     fontSize: 14,
//     color: Colors.TEXT_SECONDARY,
//   },
//   petAge: {
//     fontSize: 12,
//     color: Colors.TEXT_LIGHT,
//     marginTop: 3,
//   },
// });










// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Colors from "./../../../constants/Colors";
// import AntDesign from '@expo/vector-icons/AntDesign';

// export default function PetListItem({ pet, isFavorite, onToggleFavorite }) {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: pet.imageUrl }} style={styles.petImage} />

//       <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteIcon}>
//   {/* <Ionicons
//     name={isFavorite ? "heart" : "heart-outline"}
//     size={24}
//     color={isFavorite ? "red" : "gray"}
//   /> */}
//   <AntDesign name={isFavorite ? "heart" : "hearto"} size={24}
//   color={isFavorite ? "red" : "gray"} />
// </TouchableOpacity>


//       {/* <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteIcon}>
//         <Ionicons
//           name={isFavorite ? "heart" : "heart-outline"}
//           size={24}
//           color={isFavorite ? Colors.BOLDS : Colors.GRAY}
//         />
//       </TouchableOpacity> */}

//       <View style={styles.petDetails}>
//         <Text style={styles.petName}>{pet.name}</Text>
//         <Text style={styles.petBreed}>{pet.breed}</Text>
//         <Text style={styles.petAge}>{pet.age} years old</Text>
//       </View>
//     </View>
//   );
// }









// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   Image,
// //   StyleSheet,
// //   TouchableOpacity,
// // } from "react-native";
// // // import { Ionicons } from "@expo/vector-icons"; // For heart icon
// // import Ionicons from '@expo/vector-icons/Ionicons';
// // import Colors from "./../../../constants/Colors"

// // export default function PetListItem({ pet }) {
// //   const [isFavorite, setIsFavorite] = useState(false);

// //   const toggleFavorite = () => {
// //     setIsFavorite(!isFavorite);
// //   };

// //   return (
// //     <View style={styles.card}>
// //       <Image
// //         source={{ uri: pet.imageUrl }}
// //         style={styles.petImage}
// //       />
// //       <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
// //         <Ionicons
// //           name={isFavorite ? "heart" : "heart-outline"}
// //           size={24}
// //           color={isFavorite ? Colors.BOLDS : Colors.GRAY}
// //           // color={isFavorite ? "Red" : Colors.GRAY}
// //         />
// //       </TouchableOpacity>

// //       <View style={styles.petDetails}>
// //         <Text style={styles.petName}>{pet.name}</Text>
// //         <Text style={styles.petBreed}>{pet.breed}</Text>
// //         <Text style={styles.petAge}>{pet.age} years old</Text>
// //       </View>
// //     </View>
// //   );
// // }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 10,
//     margin: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     width: 160, // Fixed width for uniform cards
//   },
//   petImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 10,
//   },
//   // favoriteIcon: {
//   //   position: "absolute",
//   //   top: 10,
//   //   right: 10,
//   //   backgroundColor: "white", // Ensures visibility
//   //   borderRadius: 15,
//   //   padding: 5,                // Adds space for better tap target
//   //   shadowColor: "#000",
//   //   shadowOffset: { width: 0, height: 2 },
//   //   shadowOpacity: 0.3,
//   //   shadowRadius: 4,
//   //   elevation: 5,
//   // },
  
//   favoriteIcon: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//   },
//   petDetails: {
//     marginTop: 8,
//   },
//   petName: {
//     fontWeight: "bold",
//     fontSize: 16,
//     color: Colors.TEXT_BOLD,
//   },
//   petBreed: {
//     fontSize: 14,
//     color: Colors.TEXT_SECONDARY,
//   },
//   petAge: {
//     fontSize: 12,
//     color: Colors.TEXT_LIGHT,
//     marginTop: 3,
//   },
// });









// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import Colors from '../../../constants/Colors';

// export default function PetListItem({ pet }) {
//   return (

//     <TouchableOpacity onPress={{}} style={{
//       padding:10,
//       marginRight:15,
//       backgroundColor:Colors.BOLDS,
//       borderRadius:10
//     }}>
//       <View style={{
//             position:'absolute',
//             zIndex:10,
//             right:10,
//             top:10
//         }}></View>
//       <Image source={{uri: pet?.imageUrl}} style={{
//             width:150,
//             height:135,
//             objectFit:'cover',
//             borderRadius:10
//         }} />
//       <Text style={{
//             // fontFamily:'outfit-medium',
//             fontSize:18
//         }}>{pet?.name}</Text>
//       <View style={{
//             display:'flex',
//             flexDirection:'row',
//             justifyContent:'space-between',
//             alignItems:'center'
//         }}>
//         <Text style={{
//                 color:Colors.GRAY,
//                 // fontFamily:'outfit'
//             }}>{pet?.breed}</Text>
//         <Text style={{
//                 fontFamily:'outfit',
//                 color:Colors.PRIMARY,
//                 paddingHorizontal:7,
//                 borderRadius:10,
//                 fontSize:11,
//                 backgroundColor:Colors.LIGHT_PRIMARY,

//             }}>{pet.age} YRS</Text>
//       </View>
//     </TouchableOpacity>


//     // <View style={styles.container}>
//     //   <Image source={{ uri: pet.imageUrl }} style={styles.image} />
//     //   <Text style={styles.name}>{pet.name  || Kitty}</Text>
//     //   <Text style={styles.breed}>{pet.breed}</Text>
//     //   <Text style={{}}>{pet.age} YRS</Text>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 150,
//     margin: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     alignItems: "center",
//   },
//   image: { width: 100, height: 100, borderRadius: 10 },
//   name: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
//   breed: { fontSize: 14, color: "#555" },
// });
