import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const data = [
          { key: " Homelessness "},
          { key: " Domestic Abuse "},
          { key: " Food Pantries "},
          { key: " Rental Service's "},
          { key: " Tenant Right's "},
          { key: " Metal Health "},
          { key: " Elder Abuse "},
          { key: " Credit Builder "},
          { key: " Home Ownership "},
          { key: " Legal Service's "},

];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
 class Services extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

onPress = () => {
  this.props.navigation.navigate('Services',
  { screen: 'Homelessness', initial: false,},
  { screen: 'Domestic', initial: false,},
  { screen: 'Pantry', initial: false,},
  { screen: 'Rental', initial: false,},
  { screen: 'Tenant', initial: false,},
  { screen: 'Mental', initial: false,},
  { screen: 'Elder', initial: false,},
  { screen: 'Credit', initial: false,},
  { screen: 'Ownership', initial: false,},
  { screen: 'Legal', initial: false,}
  )
}
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={styles.item} key={item.key}  onPress={this.onPress}>
      <View >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
     </TouchableOpacity>
    );
  };

  render() {
    return (

      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008E89',

  },
  item: {
    backgroundColor: '#085E8D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    fontSize: 20,
   fontWeight: "900",
   justifyContent: 'center',
    color: '#fff',
  },
});

export default Services;
