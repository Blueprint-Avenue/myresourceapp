import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';

 class Ownership extends Component {
  static navigationOptions = {
    title: 'Home Ownership'
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

export default Ownership;
