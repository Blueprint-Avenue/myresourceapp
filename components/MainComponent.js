import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ServicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Services!</Text>
    </View>
  );
}
function AboutScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About!</Text>
      </View>
    );
  }

  function CryptoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Crypto!</Text>
      </View>
    );
  }
  function ContactScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Contact!</Text>
      </View>
    );
  }



const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Home"
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <MaterialCommunityIcons name="home" color={tintColor} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({tintColor }) => (
              <Icon name="support" color={tintColor} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="About Us"
        component={AboutScreen}
        options={{
            tabBarLabel: 'About Us',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="info" color={tintColor} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Crypto"
        component={CryptoScreen}
        options={{
            tabBarLabel: 'Crypto',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="attach-money" color={tintColor} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Contact Us"
        component={ContactScreen}
        options={{
            tabBarLabel: 'Contact Us',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="contact-mail" color={tintColor} size={26} />
            ),
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
