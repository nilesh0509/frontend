import { View, Image, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import SPLASH from "@/assets/images/splash-icon.png"; // Ensure correct path

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace("LoginFace");
    }, 2500);
  }, [fadeAnimation, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.imageContainer, opacity: fadeAnimation }}>
        <Image style={styles.image} source={SPLASH} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: 450,
    height: 920,
  },
});






// import { View, Text, Animated, Image, StyleSheet } from 'react-native'
// import React, { useEffect, useRef } from 'react'
// import SPLASH from "./../assets/images/splash-icon.png"

// export default function SplashScreen() {

//     const fadeAnimation = useRef(new Animated.Value(0)).current;
//     useEffect(() =>{
//         Animated.timing(fadeAnimation, {
//             toValue: 1,
//             duration: 2000,
//             useNativeDriver: true
//         }).start();
//     }, [fadeAnimation]);
    
//   return (
//     <View style={styles.container} >
//       {/* <Text>SplashScreen</Text> */}
//       <View style={styles.imageContainer} >
//         <Image style={styles.image} source={SPLASH} />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "#1e1e1e",
//   },
//   imageContainer: {
//     borderRadius: 20,
//     overflow: "hidden",
//   },
//   image: {
//     width: 450,
//     height: 920,
//     // resizeMode: "cover",
//   },
// });