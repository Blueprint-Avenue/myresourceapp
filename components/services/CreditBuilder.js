import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';

class Credit extends Component {
  static navigationOptions = {
    title: 'Credit Builder'
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

export default Credit;
