import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Contact from "./ContactScreen";
import Crypto from "./CryptoScreen";
import OurServices from './ServicesScreen';
import { useFonts, Anton_400Regular} from '@expo-google-fonts/anton';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#085E7D",
        },
        headerTintColor: "#FFD32D",
        headerBackTitle: "#FFD32D",
      }}
    >
      <Stack.Screen name="Services 4 You" component={OurServices} />
    </Stack.Navigator>
  );
}

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#085E7D",
          },
          headerTintColor: "#FFD32D",
          headerBackTitle: "#FFD32D",
        }}
      >
        <Stack.Screen name="Our Helping Hand" component={Home} />
      </Stack.Navigator>
    );
  }
  const CryptoStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#085E7D",
          },
          headerTintColor: "#FFD32D",
          headerBackTitle: "#FFD32D",
        }}
      >
        <Stack.Screen name="Crypto 101" component={Crypto} />
      </Stack.Navigator>
    );
  }
  const ContactStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#085E7D",
          },
          headerTintColor: "#FFD32D",
          headerBackTitle: "#FFD32D",
        }}
      >
        <Stack.Screen name="Contact Us" component={Contact} />
      </Stack.Navigator>
    );
  }
  const style = StyleSheet.create({
    Text: {
        fontFamily: "Anton_400Regular",
        fontWeight: "900",
        fontSize: 45
    }
});
export { MainStackNavigator, ContactStackNavigator, CryptoStackNavigator, HomeStackNavigator };
