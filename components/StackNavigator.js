import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Contact from "./ContactScreen";
import Crypto from "./CryptoScreen";
import Services from './ServicesScreen';
import Mental from "./services/MentalHealth";
import Pantry from "./services/FoodPantry";
import Elder from "./services/ElderAbuse";
import Homelessness from "./services/Homelessness";
import Ownership from "./services/HomeOwnership";
import Domestic from "./services/DomesticAbuse";
import Credit from "./services/CreditBuilder";
import Legal from './services/LegalServices';
import Rental from './services/RentalServices';
import Tenant from './services/TenantRights';



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
      <Stack.Screen name="Homelessness" component={Homelessness} />
      <Stack.Screen name="Domestic Abuse" component={Domestic} />
      <Stack.Screen name="Food Pantries" component={Pantry} />
      <Stack.Screen name="Rental Services" component={Rental} />
      <Stack.Screen name="Tenant Rights" component={Tenant} />
      <Stack.Screen name="Elder Abuse" component={Elder} />
      <Stack.Screen name="Mental Health" component={Mental} />
      <Stack.Screen name="Credit Builder" component={Credit} />
      <Stack.Screen name="Home Ownership" component={Ownership} />
      <Stack.Screen name="Legal Services" component={Legal} />
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
