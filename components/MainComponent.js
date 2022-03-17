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
import { MainStackNavigator } from './StackNavigator';
import Services from './ServicesScreen';
import BottomTabNavigator from './TabNavigator';






export default function Main() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
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
