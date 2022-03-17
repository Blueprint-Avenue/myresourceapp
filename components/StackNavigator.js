import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Contact from "./ContactScreen";
import Crypto from "./CryptoScreen";
import Services from './ServicesScreen';
import Mental from "./MentalHealth";

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
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Mental Health" component={Mental} />
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
        <Stack.Screen name="Home" component={Home} />
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

export { MainStackNavigator, ContactStackNavigator, CryptoStackNavigator, HomeStackNavigator };
