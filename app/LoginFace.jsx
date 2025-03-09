import React from "react";
import { View, Text, Image, Pressable, Dimensions, StyleSheet } from "react-native";
import { useRouter } from "expo-router";  // ✅ Use expo-router instead of useNavigation
import Colors from "@/constants/Colors";
import LoginScreen from './LoginScreen';

const { width, height } = Dimensions.get("window");

export default function LoginFace() {
  const router = useRouter();  // ✅ Use router for navigation

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/img/redPet.png")} style={styles.image} />
      <View style={styles.secondView}>
        <Text style={[styles.heading, { fontSize: scaleFont(45) }]}>Adopt Don't Shop</Text>
        <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>Save a life</Text>
        <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>Adopt a forever pet today</Text>
        <Pressable onPress={() => router.push("LoginScreen")} style={styles.button}>
          <Text style={[styles.buttonText, { fontSize: scaleFont(40) }]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const scaleFont = (size) => size * (width / 375);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    flex: 1,
  },
  image: {
    width: width * 1.06,
    height: height * 0.65,
    marginLeft: -30,
  },
  secondView: {
    position: "absolute",
    top: height * 0.5,
    left: 0,
    right: 0,
    paddingTop: 40,
    padding: 6,
    alignItems: "center",
    backgroundColor: Colors.YELLOW,
    height: height * 0.6,
    borderRadius: 50,
  },
  heading: {
    color: Colors.BOLDS,
    textAlign: "center",
  },
  subheading: {
    textAlign: "center",
    color: Colors.GRAY,
    marginTop: 10,
  },
  button: {
    padding: 14,
    marginTop: 20,
    backgroundColor: Colors.BUTTONBG,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.BOLDS,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    color: Colors.BOLDS,
  },
});









// import React, { useState } from 'react';
// import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // For navigation
// import Colors from '@/constants/Colors'; // Your color constants
// import LoginScreen from './../src/screens/LoginScreen/LoginScreen';

// // Screen dimensions for responsiveness
// const { width, height } = Dimensions.get('window');

// export default function LoginFace() {
//     const [user, setUser] = useState(false);
//     const navigation = useNavigation();

//     const onPresss = () => {
//         setUser(true);
//     };

//     if(user){
//         return <LoginScreen />
//     }

//     // Scaling factor for responsive font sizes
//     const scaleFont = (size) => {
//         return size * (width / 375); // 375 is the base screen width (iPhone 6)
//     };

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Image
//                     source={require('./../assets/img/redPet.png')}
//                     style={styles.image}
//                 />
//             </View>

//             {/* Second View with Absolute Positioning */}
//             <View style={styles.secondView}>
//                 <Text style={[styles.heading, { fontSize: scaleFont(45) }]}>
//                     Adopt Don't Shop
//                 </Text>

//                 <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>
//                     Save a life
//                 </Text>

//                 <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>
//                     Adopt a forever pet today
//                 </Text>

//                 <Pressable onPress={onPresss} style={styles.button}>
//                     <Text style={[styles.buttonText, { fontSize: scaleFont(40) }]}>
//                         Next
//                     </Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: Colors.BACKGROUND,
//         flex: 1,
//     },
//     image: {
//         width: width * 1.06,
//         height: height * 0.65,
//         marginLeft: -30,
//     },
//     secondView: {
//         position: 'absolute',
//         top: height * 0.5, // 50% of the screen height
//         left: 0,
//         right: 0,
//         paddingTop: 40,
//         padding: 6,
//         display: 'flex',
//         alignItems: 'center',
//         backgroundColor: Colors.YELLOW,
//         height: height * 0.6,  // 60% of screen height
//         borderRadius: 50,
//         zIndex: 1,  // Ensures the second View is on top of the first one
//     },
//     heading: {
//         color: Colors.BOLDS,
//         textAlign: 'center',
//     },
//     subheading: {
//         textAlign: 'center',
//         color: Colors.GRAY,
//         marginTop: 10,
//     },
//     button: {
//         padding: 14,
//         marginTop: 20,
//         backgroundColor: Colors.BUTTONBG,
//         borderRadius: 20,
//         borderWidth: 1,
//         borderColor: Colors.BOLDS,
//         width: '100%',
//     },
//     buttonText: {
//         textAlign: 'center',
//         color: Colors.BOLDS,
//     },
// });
