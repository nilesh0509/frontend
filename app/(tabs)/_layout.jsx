import { Tabs } from 'expo-router'; // Import Tabs for routing
import Ionicons from '@expo/vector-icons/Ionicons'; // For Ionicons (optional, but can be useful for consistency)
import Colors from '@/constants/Colors'; // Make sure your Colors are defined properly
import AntDesign from '@expo/vector-icons/AntDesign'; // For AntDesign icons

// Import the screens for tabs
import HomeScreen from './HomeScreen'; // Ensure HomeScreen is properly exported from HomeScreen.js
import Favorite from './favorite'; // Ensure favorite is properly exported
import Chat from './chat'; // Ensure chat is properly exported
import Profile from './profile'; // Ensure profile is properly exported

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.YELLOW }, // Styling the tab bar
        tabBarActiveTintColor: Colors.BOLDS, // Active tab color
        tabBarInactiveTintColor: Colors.GRAY, // Inactive tab color
      }}
    >
      {/* Define the tab screens */}
      <Tabs.Screen
        name="HomeScreen"
        // component={HomeScreen} // Pass the component to the Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} /> // AntDesign home icon
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        // component={Favorite} // Pass the component to the Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={24} color={color} /> // AntDesign heart icon

          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        // component={Chat} // Pass the component to the Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={24} color={color} /> // AntDesign chat icon
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        // component={Profile} // Pass the component to the Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color={color} /> // AntDesign user icon
          ),
        }}
      />
    </Tabs>
  );
}
