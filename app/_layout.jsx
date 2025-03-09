import { Stack, Tabs } from "expo-router";
import { useFont } from "expo-font"
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "@/constants/Colors";

// const tokenCache = {
//   async getToken(key) {
//     try {
//       const item = await SecureStore.getItemAsync(key)
//       if (item) {
//         console.log(`${key} was used 🔐 \n`)
//       } else {
//         console.log('No values stored under key: ' + key)
//       }
//       return item
//     } catch (error) {
//       console.error('SecureStore get item error: ', error)
//       await SecureStore.deleteItemAsync(key)
//       return null
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value)
//     } catch (err) {
//       return
//     }
//   },
// }


export default function Layout() {
  return (
    // <Stack >
    // <Stack screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="(tabs)" 
    //   options={{
    //     headerShown:false
    //   }}/>
    //   <Stack.Screen name="index"
    //   options={{
    //     headerShown:false
    //   }}/>
    //   <Stack name="LoginFace"
    //   options={{
    //     headerShown:false
    //   }} />
    //   <Stack name="LoginScreen"
    //   options={{
    //     headerShown:false
    //   }} />
    //   <Stack.Screen name="SplashScreen"
    //   options={{
    //     headerShown:false
    //   }}
    //   />
    // </Stack>
    

    // <ClerkProvider 
    // tokenCache={tokenCache}
    // publishableKey={publishableKey}>
      
    // <Stack>
    //   {/* <Stack.Screen name="index" /> */}
    //   <Stack.Screen name="(tabs)" 
    //   options={{
    //     headerShown:false
    //   }}
    //   />
    //   <Stack.Screen name="login/index"
    //   options={{
    //     headerShown:false
    //   }}
    //   />

    // </Stack>
    // {/* <Link href={'/login'}>
    //       <Text>Login</Text> 
    //     </Link> */}
    // </ClerkProvider>

  

    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" options={{ title: "Splash Screen" }} />
      <Stack.Screen name="LoginFace" options={{ title: "Login Face" }} />
      <Stack.Screen name="LoginScreen" options={{ title: "Login Screen" }} />
      <Stack.Screen name="LoginPage" options={{ title: "Login Page" }} />
      <Stack.Screen name="SignupPage" options={{ title: "Signup Page" }} />
      <Stack.Screen name="HomeScreen" options={{ title: "Home Screen" }} /> */}
    </Stack>
  );
}





// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{
//         headerShown: false
//       }} />
      
//     </Stack>
//   )
// }
