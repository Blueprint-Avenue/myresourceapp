import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';

 class Homelessness extends Component {
  static navigationOptions = {
    title: 'Homelessness'
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

export default Homelessness;
