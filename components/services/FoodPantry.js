import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';

class Pantry extends Component {
  static navigationOptions = {
    title: 'Food Pantry'
}
  render() {
    return (
        <View>
      <Text>MentalHealth</Text>
      <Button>Mental</Button>
      </View>
    )
  }
}

export default Pantry;
