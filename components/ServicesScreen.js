import React, { Component } from 'react'
import { Text } from 'react-native';

 class Services extends Component {
  constructor(props) {
    super(props);
      this.state ={
        GridListItems: [
          { key: " Homeless Shelter's"},
          { key: " Domestic Abuse"},
          { key: " Food Pantries"},
          { key: " Rental Services"},
          { key: " Tentant Rights"},
          { key: " Suicide Prevention"},
          { key: " Elder Abuse"},
          { key: " Credit Builder Services"},
          { key: " Home Ownership Services"},
          { key: " Legal Services"},
        ]
      }
  }


  GetGridViewItem(item) {
    Alert.alert(item);
  }

    static navigationOptions = {
        title: 'Services'
    }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
         data={ this.state.GridListItems }
         renderItem={ ({item}) =>
           <View style={styles.GridViewContainer}>
            <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
           </View> }
         numColumns={2}
      />
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 100,
   margin: 5,
   backgroundColor: '#008E89'
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
 }
});

export default Services;
