import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Contact from './ContactScreen';
import Home from './HomeScreen';
import Crypto from './CryptoScreen';
import { createAppContainer } from 'react-navigation';
import Constants from 'expo-constants';


function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
  }

function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text>Services!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();


export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({

          tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName='home';
                  size = focused ? 25 : 20;
                  color= focused ? '#008E89' : '#FFD32D';
              } else if (route.name === 'Services'){
                  iconName='support';
                  size = focused ? 25 : 20;
                  color= focused ? '#008E89' : '#FFD32D';
              } else if (route.name === 'Crypto'){
                iconName='bitcoin';
                size = focused ? 25 : 20;
                color= focused ? '#008E89' : '#FFD32D';
            } else if (route.name === 'Contact'){
                iconName='chat';
                size = focused ? 25 : 20;
                color= focused ? '#008E89' : '#FFD32D';

            }
            return(
                <FontAwesome
                name={iconName}
                size={size}
                color={color}
                />
            )
          }
      })}
      tabBarOptions={{
          showIcon: true,
          labelStyle: { fontSize: 16},
          showLabel: true
      }}
      activeColor='#f0edf6'
      inactiveColor='#008E89'
      barStyle={{backgroundColor:'#085E8D'}}
      >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        />
        <Tab.Screen
        name="Services"
        component={ServicesScreen}
        />
        <Tab.Screen
        name="Crypto"
        component={Crypto}
        />
        <Tab.Screen
        name="Contact Us"
        component={Contact}
        />

      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="About Us" component={AboutScreen} />
        <Stack.Screen name="Crypto" component={CryptoScreen} />
        <Stack.Screen name="Contact Us" component={ContactNavigator} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent:'center',
       alignItems: 'center'
    }
});
