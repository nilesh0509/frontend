import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "@/constants/Colors";
import axios from "axios";
import { Svg, Text as SvgText, Rect } from "react-native-svg";
// import { userInfo } from "@/src/services/authService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from "./../../services/authService";

// export default function Header({ userId }) {
export default function Header() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(); // Fetch from API
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem("authToken");
  //       if (!token) return;

  //       const response = await axios.get("http://192.168.1.3:8080/api/auth/me", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);


//   useEffect(() => {
//     // if (!userId) return; // Avoid API call if userId is not provided

//     const fetchUserData = async () => {
//         setLoading(true);
//       try {
//         const token = await userInfo({ name });
//         await AsyncStorage.setItem("authToken", data.id);
//         // setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }finally {
//         setLoading(false);
//       }
//     };
//     if (userId) fetchUserData();
//   }, [userId]);



// Default profile image
const defaultProfileImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <View style={styles.container} >
      {/* <Text>Header</Text> */}
      <View style={styles.textContainer} >
        <Text style={styles.welcomeText} >Welcome,</Text>
        <Text style={styles.userNameText} >{user?.name || 'PawPal'}</Text>
      </View>

      {user?.profilePhoto ? (
        <Image source={{ uri: user.profilePhoto }} style={styles.profileImage} />
      ) : user?.name ? (
        <View style={styles.letterAvatar}>
          <Svg height="60" width="60" viewBox="0 0 60 60" >
            {/* Border effect */}
          <Rect
            x="0"
            y="0"
            width="60"
            height="60"
            rx="30"
            ry="30"
            fill={Colors.PRIMARY}
            stroke={Colors.BORDERR}
            strokeWidth="5"
          />
            <SvgText
              x="50%"
              y="50%"
              fontSize="24"
              fill={Colors.BOLDS}
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {user.name.charAt(0).toUpperCase()}
            </SvgText>
          </Svg>
        </View>
      ) : (
        <Image source={{ uri: defaultProfileImage }} style={styles.profileImage} />
      )} 

      {/*  <Image style={styles.profileImage} 
        source={{uri: user?.imageUrl ||<Svg> <SvgText> user?.name.charAt(0).toUpperCase() </SvgText> </Svg>|| defaultProfileImage || '@/assets/images/bone.png' }}
      /> */}



    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      margin: 10,
    },
    textContainer: {
      flexDirection: 'column',
    },
    welcomeText: {
      fontSize: 18,
    //   fontFamily: 'outfit',
      color: Colors.BOLDS, 
    },
    userNameText: {
      fontSize: 24,
    //   fontFamily: 'outfit-medium',
      color: Colors.BOLDS, 
      marginTop: 4,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 5,
      borderColor: Colors.BORDERR, // Light border around the image
    },
  });
