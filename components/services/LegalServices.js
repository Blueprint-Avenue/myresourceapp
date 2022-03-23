import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, Button, View } from 'react-native';

class Legal extends Component {
  static navigationOptions = {
    title: 'Legal Aid'
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

export default Legal;
