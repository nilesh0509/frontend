import React, { useState } from "react";
import { View, Text, Image, Pressable, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "@/constants/Colors";
import LoginPage from "./LoginScreen/LoginPage";

const { width, height } = Dimensions.get("window");

export default function LoginFace() {
  const navigation = useNavigation();
  const [isStarted, setIsStarted] = useState(false)
  const handleGetStarted = () => {
    setIsStarted(true); // Set to true when the button is pressed
  };
  if (isStarted) {
    return <LoginPage />;
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/img/bwPet.png")} style={styles.image} />
      <View style={styles.secondView}>
        <Text style={[styles.heading, { fontSize: scaleFont(45) }]}>Adopt Don't Shop</Text>
        <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>Save a life</Text>
        <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>Adopt a forever pet today</Text>
        {/* <Pressable onPress={() => navigation.navigate("LoginScreen")} style={styles.button}> */}
        <Pressable onPress={handleGetStarted} style={styles.button}>
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



// import { View, Text, Image, Pressable, Dimensions, StyleSheet } from 'react-native'
// import React , {useCallback, useState} from 'react'
// import Colors from '@/constants/Colors'
// import LoginPage from './LoginPage'

// // Screen dimensions for responsiveness
// const { width, height } = Dimensions.get('window');


// // export const useWarmUpBrowser = () => {
// //   React.useEffect(() => {
// //     // Warm up the android browser to improve UX
// //     // https://docs.expo.dev/guides/authentication/#improving-user-experience
// //     void WebBrowser.warmUpAsync()
// //     return () => {
// //       void WebBrowser.coolDownAsync()
// //     }
// //   }, [])
// // }

// export default function LoginScreen() {

//   const [isStarted, setIsStarted] = useState(false);

//   // Function to handle the "Get Started" button press
//   const handleGetStarted = () => {
//     setIsStarted(true); // Set to true when the button is pressed
//   };

//   // If the button is pressed, render the LoginPage component
//   if (isStarted) {
//     return <LoginPage />;
//   }

//  // Scaling factor for responsive font sizes
//  const scaleFont = (size) => {
//     return size * (width / 375); // 375 is the base screen width (iPhone 6)
// };

//   return (
    
//     <View style={styles.container}>
//       <View >
//         <Image 
//           source={require('./../../../assets/img/bwPet.png')} 
//           style={styles.image}
//         />
//       </View>
  
//       {/* Second View with Absolute Positioning */}
//       <View style={styles.secondView}>
//         <Text style={[styles.heading, { fontSize: scaleFont(45) }]}>
//             Adopt Don't Shop
//         </Text>
  
//         <Text style={[styles.subheading, { fontSize: scaleFont(30) }]}>
//             Save a life 
//         </Text>

//         <Text style={[styles.subheading, { fontSize: scaleFont(30) }]} >
//             Adopt a forever pet today
//         </Text>
  
//         <Pressable onPress={handleGetStarted} style={styles.button} >
//           <Text style={[styles.buttonText, { fontSize: scaleFont(40) }]}>
//             Get Started
//           </Text>
//         </Pressable>
//       </View>
//     </View>
    
//   );
  
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
