import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "./../../constants/Colors";
import PetListItem from "../../src/components/Home/PetListItem";
import { getFavoritePets, removeFavorite } from "../../src/services/favoriteService";

export default function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch favorite pets when component mounts
  useEffect(() => {
    fetchFavorites();
  }, []);

  // Function to fetch favorite pets
  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavoritePets();
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorite pets:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Handle refresh when pulling down
  const handleRefresh = () => {
    setRefreshing(true);
    fetchFavorites();
  };

  // Remove a pet from favorites
  const handleRemoveFavorite = async (petId) => {
    try {
      await removeFavorite(petId);
      // Update the local state to reflect the removal
      setFavorites(favorites.filter(pet => pet._id !== petId));
    } catch (error) {
      console.error("Error removing pet from favorites:", error);
    }
  };

  // Render a favorite pet item
  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <PetListItem 
        pet={item} 
        isFavorite={true} 
        onFavoriteToggle={() => handleRemoveFavorite(item._id)}
      />
    </View>
  );

  // Empty state when no favorites
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="heart-outline" size={80} color={Colors.GRAY} />
      <Text style={styles.emptyText}>No favorite pets yet</Text>
      <Text style={styles.emptySubText}>
        Find pets you love and tap the heart icon to add them to your favorites
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Favorites</Text>
        {favorites.length > 0 && (
          <Text style={styles.count}>{favorites.length} pets</Text>
        )}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} style={styles.loader} />
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item._id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListEmptyComponent={renderEmptyState}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.BOLDS,
  },
  count: {
    fontSize: 16,
    color: Colors.TEXT_SECONDARY,
  },
  favoriteItem: {
    flex: 1,
    margin: 5,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.TEXT_BOLD,
    marginTop: 15,
  },
  emptySubText: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    textAlign: "center",
    marginTop: 10,
    maxWidth: "80%",
  }
});







// import React, { useEffect, useState } from "react";
// import { View, FlatList, ActivityIndicator, Text } from "react-native";
// import PetListItem from "../../src/components/Home/PetListItem";
// import { getFavourites } from "../../src/services/favoriteService";
// import Colors from "@/constants/Colors";

// export default function Favourite() {
//   const [favouriteList, setFavouriteList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       try {
//         const data = await getFavourites();
//         setFavouriteList(data);
//       } catch (error) {
//         console.error("Error fetching favourites:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFavourites();
//   }, []);

//   return (
//     <View>
//       <Text style={styles.header}>My Favourite Pets</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : favouriteList.length > 0 ? (
//         <FlatList
//           data={favouriteList}
//           horizontal
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => <PetListItem pet={item.petDetails} />}
//           style={{ marginTop: 10 }}
//           showsHorizontalScrollIndicator={false}
//         />
//       ) : (
//         <Text style={{ textAlign: "center", marginTop: 20 }}>
//           No favourite pets added yet.
//         </Text>
//       )}
//     </View>
//   );
// }

// const styles = {
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//     color: Colors.PRIMARY
//   },
// };





// import React, { useEffect, useState } from "react";
// import { View, FlatList, ActivityIndicator, Text } from "react-native";
// import PetListItem from "../../src/components/Home/PetListItem";
// import { getFavourites } from "../../src/services/favoriteService";
// import Colors from "@/constants/Colors";

// const USER_ID = "user_123"; // Replace with dynamic user authentication

// export default function Favourite() {
//   const [favouriteList, setFavouriteList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       const data = await getFavourites(USER_ID);
//       setFavouriteList(data);
//       setLoading(false);
//     };
//     fetchFavourites();
//   }, []);

//   return (
//     <View>
//       <Text style={styles.header}>My Favourite Pets</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : favouriteList.length > 0 ? (
//         <FlatList
//           data={favouriteList}
//           horizontal
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => <PetListItem pet={item.petDetails} />}
//           style={{ marginTop: 10 }}
//           showsHorizontalScrollIndicator={false}
//         />
//       ) : (
//         <Text style={{ textAlign: "center", marginTop: 20 }}>
//           No favourite pets added yet.
//         </Text>
//       )}
//     </View>
//   );
// }

// const styles = {
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//     color: Colors.PRIMARY
//   },
// };









// import React, { useEffect, useState } from "react";
// import { View, FlatList, ActivityIndicator, Text } from "react-native";
// // import PetListItem from "./PetListItem";
// // import { getFavouritePets } from "@/src/services/favouriteService";
// import Colors from "@/constants/Colors";
// import PetListItem from "../../src/components/Home/PetListItem";
// import { getFavouritePets } from "../../src/services/favoriteService";

// export default function Favourite() {
//   const [favouriteList, setFavouriteList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch favourite pets on component load
//   useEffect(() => {
//     const fetchFavourites = async () => {
//       const data = await getFavouritePets();
//       setFavouriteList(data);
//       setLoading(false);
//     };
//     fetchFavourites();
//   }, []);

//   return (
//     <View>
//       <Text style={styles.header}>My Favourite Pets</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : favouriteList.length > 0 ? (
//         <FlatList
//           data={favouriteList}
//           horizontal
//           keyExtractor={(item) => item._id.toString()}
//           renderItem={({ item }) => <PetListItem pet={item} />}
//           style={{ marginTop: 10 }}
//           showsHorizontalScrollIndicator={false}
//         />
//       ) : (
//         <Text style={{ textAlign: "center", marginTop: 20 }}>
//           No favourite pets added yet.
//         </Text>
//       )}
//     </View>
//   );
// }

// const styles = {
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//     color: Colors.PRIMARY
//   },
// };









// import React, { useEffect, useState } from "react";
// import { View, FlatList, Text, ActivityIndicator, Alert } from "react-native";
// import PetListItem from "../../src/components/Home/PetListItem";
// import { getFavorites, toggleFavorite } from "@/src/services/favoriteService";
// import Colors from "@/constants/Colors";

// export default function Favorite({ userId }) {
//   const [favoritePets, setFavoritePets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch favorites when component mounts
//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const data = await getFavorites(userId);
//         setFavoritePets(data);
//       } catch (error) {
//         console.error("Error fetching favorites:", error);
//         Alert.alert("Error", "Failed to load favorites.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFavorites();
//   }, [userId]);

//   // ✅ Handle favorite toggle
//   const handleToggleFavorite = async (petId) => {
//     try {
//       const result = await toggleFavorite(userId, petId);

//       if (result.message.includes("added")) {
//         const newFavorite = { petId };
//         setFavoritePets([...favoritePets, newFavorite]);
//         Alert.alert("Success", "Pet added to favorites!");
//       } else {
//         const updatedFavorites = favoritePets.filter((pet) => pet.petId !== petId);
//         setFavoritePets(updatedFavorites);
//         Alert.alert("Success", "Pet removed from favorites!");
//       }
//     } catch (error) {
//       console.error("Error toggling favorite:", error);
//       Alert.alert("Error", "Failed to update favorites.");
//     }
//   };

//   return (
//     <View>
//       {loading ? (
//         <ActivityIndicator size="large" color={Colors.PRIMARY} />
//       ) : favoritePets.length > 0 ? (
//         <FlatList
//           data={favoritePets}
//           keyExtractor={(item) => item.petId.toString()}
//           renderItem={({ item }) => (
//             <PetListItem 
//               pet={item} 
//               isFavorite={true} 
//               onToggleFavorite={() => handleToggleFavorite(item.petId)}
//             />
//           )}
//         />
//       ) : (
//         <Text style={{ textAlign: "center", marginTop: 20 }}>
//           No favorites added yet.
//         </Text>
//       )}
//     </View>
//   );
// }









// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { toggleFavorite, getFavoritePets } from "@/src/services/favoriteService";
// import Colors from "@/constants/Colors";

// export default function Favorite({ userId, petId }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   // ✅ Load Favorites on Component Mount
//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const favorites = await getFavoritePets(userId);
//         const isFav = favorites.some((favorite) => favorite.petId._id === petId);
//         setIsFavorite(isFav);
//       } catch (error) {
//         console.error("Error fetching favorites:", error);
//       }
//     };

//     fetchFavorites();
//   }, [userId, petId]);

//   // ✅ Toggle Favorite Function
//   const handleToggleFavorite = async () => {
//     try {
//       await toggleFavorite(userId, petId);
//       setIsFavorite((prev) => !prev); // Toggle state
//     } catch (error) {
//       console.error("Error toggling favorite:", error);
//     }
//   };

//   return (
//     <TouchableOpacity onPress={handleToggleFavorite} style={styles.favoriteIcon}>
//       <Ionicons
//         name={isFavorite ? "heart" : "heart-outline"}
//         size={24}
//         color={isFavorite ? Colors.HEART_RED : Colors.ICON_GRAY}
//       />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   favoriteIcon: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     zIndex: 10,
//   },
// });
