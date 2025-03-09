import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    Alert,
    Pressable,
    ActivityIndicator, // Import ActivityIndicator
  } from "react-native";
  import React, { useState } from "react";
  import Colors from '../../constants/Colors';
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { useNavigation } from "@react-navigation/native";
  import LoginPage from '../LoginScreen/LoginPage'
  import axios from 'axios';
  import Toast from "react-native-toast-message";
  import { registerUser } from "../../src/services/authService";
  
  // Get the screen width and height
  const { width, height } = Dimensions.get("window");
  
  const SignupPage = ({navigation}) => {
    // const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);
    const [isStarted, setIsStarted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // To control loading state
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    const handleLogin = () => {
      setIsStarted(true);
    };
  
    if (isStarted) {
      return <LoginPage />;
    }

    const handleSubmit = async () => {
      try {
        await registerUser(name, email, password);
        Toast.show({ type: "success", text1: "Account Created!" });
        navigation.navigate("Login"); // Redirect to login
      } catch (error) {
        Toast.show({ type: "error", text1: error });
      }
    };
  
    // For signUp
    // const handleSubmit = async () => {
    //   try {
    //     setLoading(true); // Show loading spinner
    //     if (!name || !email || !password) {
    //       Alert.alert("Please Fill All The Fields");
    //       setLoading(false); // Hide loading spinner
    //       return;
    //     }
    
    //     const { data } = await axios.post('http://192.168.1.5:8080/api/v1/auth/register', { name, email, password });
    //     alert(data && data.message);
    //     console.log("Register Data ==> ", { name, email, password });
    
    //     // Clear input fields after successful registration
    //     setName(''); // Reset the name field
    //     setEmail(''); // Reset the email field
    //     setPassword(''); // Reset the password field
    
    //     setLoading(false); // Hide loading spinner
    //   } catch (error) {
    //     alert(error.response.data.message);
    //     setLoading(false); // Hide loading spinner
    //     console.log(error);
    //   }
    // };
    
  
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
          <Ionicons
            name={"arrow-back-outline"}
            color={Colors.PRIMARY}
            size={25}
          />
        </TouchableOpacity> */}
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Let's get</Text>
          <Text style={styles.headingText}>started</Text>
        </View>
  
        {/* Form */}
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name={"user"}
            size={30}
            color={Colors.SECONDARY}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor={Colors.SECONDARY}
            secureTextEntry={false}
            keyboardType="default"
            value={name}
            onChangeText={setName}
          />
        </View>
  
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name={"mail-outline"} size={30} color={Colors.SECONDARY} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={Colors.SECONDARY}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color={Colors.SECONDARY} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={Colors.SECONDARY}
              secureTextEntry={secureEntery}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntery((prev) => !prev);
              }}
            >
              <SimpleLineIcons name={"eye"} size={20} color={Colors.SECONDARY} />
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleSubmit} disabled={loading}>
            {/* Show loading spinner while submitting */}
            {loading ? (
              <ActivityIndicator size="small" color={Colors.BOLDS} />
            ) : (
              <Text style={styles.loginText}>Sign up</Text>
            )}
          </TouchableOpacity>
  
          <Text style={styles.continueText}>or continue with</Text>
          <TouchableOpacity style={styles.googleButtonContainer}>
            <Image
            //   source={require("./../../assets/images/google.png")}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
  
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Already have an account!</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.signupText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  export default SignupPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.BACKGROUND,
      padding: width * 0.04,
    },
    backButtonWrapper: {
      height: 40,
      width: 40,
      backgroundColor: Colors.GRAY,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginVertical: height * 0.04,
      paddingTop: height * 0.04,
    },
    headingText: {
      fontSize: width * 0.11,
      color: Colors.BOLDS,
      textAlign: "center",
      fontWeight: "bold",
    },
    formContainer: {
      marginTop: height * 0.01,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: Colors.BOLDS,
      borderRadius: 50,
      paddingHorizontal: width * 0.04,
      flexDirection: "row",
      alignItems: "center",
      padding: height * 0.00,
      marginVertical: height * 0.014,
      backgroundColor: Colors.YELLOW,
      width: '100%',
      height: height * 0.06,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: width * 0.02,
    },
    loginButtonWrapper: {
      backgroundColor: Colors.YELLOW,
      borderWidth: 1,
      borderColor: Colors.BOLDS,
      borderRadius: 50,
      marginTop: height * 0.01,
      width: '100%',
      height: height * 0.06,
    },
    loginText: {
      color: Colors.BOLDS,
      fontSize: width * 0.04,
      textAlign: "center",
      padding: height * 0.014,
      fontWeight: "600",
    },
    continueText: {
      textAlign: "center",
      marginVertical: height * 0.01,
      fontSize: width * 0.04,
      color: Colors.BOLDS,
    },
    googleButtonContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: Colors.BOLDS,
      borderRadius: 50,
      backgroundColor: Colors.YELLOW,
      justifyContent: "center",
      alignItems: "center",
      padding: height * 0.00,
      gap: 10,
      width: '100%',
      height: height * 0.06,
    },
    googleImage: {
      height: width * 0.05,
      width: width * 0.05,
    },
    googleText: {
      fontSize: width * 0.04,
      fontWeight: "600",
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: height * 0.02,
      gap: 5,
    },
    accountText: {
      color: Colors.BOLDS,
      fontSize: width * 0.04,
    },
    signupText: {
      color: Colors.BOLDS,
      fontSize: width * 0.04,
      fontWeight: "500",
    },
  });
  