import { View, Image, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";  // ✅ Use expo-router for navigation
import SPLASH from "@/assets/images/splash-icon.png"; 

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const router = useRouter(); // ✅ Replace navigation with router

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      router.replace("/LoginFace"); // ✅ Navigate properly
    }, 2500);
  }, [fadeAnimation, router]);

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







// import { Text, View } from "react-native";
// import SplashScreen from "./SplashScreen"
// import { useEffect, useState } from "react";
// import { useNavigation, useRootNavigationState } from "expo-router";
// import LoginFace from "./LoginFace"

// export default function Index() {

//   const [isShowSplash, setIsShowSplash] = useState(true);

//   const rootNavigation = useRootNavigationState();
//   const navigate = useNavigation();
//   useEffect(() =>{
//     setTimeout(() => {
//       setIsShowSplash(false);
//     }, 3000);
//     CheckNavLoaded();
//     navigate.setOptions({
//       headerShown: false,
//     })
//   }, [])

//   const CheckNavLoaded = () =>{
//     if(!rootNavigation.key)
//       return null;
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
//       {
//         isShowSplash ? <SplashScreen /> : <LoginFace />
//       }
//     </View>
//   );
// }


