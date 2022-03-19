import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';
import Constants from 'expo-constants';



export default function Main() {
  return (
    <View style={{
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  }}>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    </View>
  );
}
