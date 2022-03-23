import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Card, Text, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useFonts, Cairo_400Regular, Cairo_900Regular } from '@expo-google-fonts/cairo';
import { SERVICES } from '../shared/services';


function RenderHomelesness({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name5}
          image={require('./images/homeless.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://missionforhope.us/?gclid=Cj0KCQjw5-WRBhCKARIsAAId9Fkvgdfj8SEWLEWP2NQoZv6c3bbw76dsZ50xPVu133vsLTmgs_-meXYaAgbrEALw_wcB')}>
            <Text style={{ margin: 10 }}>
              {item.description5}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderDomestic({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name0}
          image={require('./images/domab.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://www.thehotline.org/?utm_source=google&utm_medium=organic&utm_campaign=domestic_violence')}>
            <Text style={{ margin: 10 }}>
              {item.description0}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderElder({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name1}
          image={require('./images/elderab.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://ncea.acl.gov/')}>
            <Text style={{ margin: 10 }}>
              {item.description1}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderChild({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name2}
          image={require('./images/childab.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://nationalchildabusecoalition.org/')}>
            <Text style={{ margin: 10 }}>
              {item.description2}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderPantry({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name3}
          image={require('./images/pantry.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://www.feedingamerica.org/')}>
            <Text style={{ margin: 10 }}>
              {item.description3}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderMental({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name4}
          image={require('./images/mental.png')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://www.samhsa.gov/find-help/national-helpline')}>
            <Text style={{ margin: 10 }}>
              {item.description4}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderTenant({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name6}
          image={require('./images/tenant.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://www.hud.gov/states/california/renting/tenantrights')}>
            <Text style={{ margin: 10 }}>
              {item.description6}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
function RenderLegal({ item }) {
  if (item) {
    return (
      <View>
        <Card
          featuredTitle={item.name10}
          image={require('./images/legal.jpg')}
        >
          <TouchableOpacity onPress={() => Linking.openURL('https://publiccounsel.org/')}>
            <Text style={{ margin: 10 }}>
              {item.description10}
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
  return <View />;
}
class OurServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,

    };
  }

  static navigationOptions = {
    title: 'Our Services'
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <RenderDomestic
            item={this.state.services.filter(services => services.featured)[0]}
          />
          <RenderElder
            item={this.state.services.filter(services => services.featured)[1]}
          />
          <RenderChild
            item={this.state.services.filter(services => services.featured)[2]}
          />
          <RenderPantry
            item={this.state.services.filter(services => services.featured)[3]}
          />
          <RenderMental
            item={this.state.services.filter(services => services.featured)[4]}
          />
          <RenderHomelesness
            item={this.state.services.filter(services => services.featured)[5]}
          />
          <RenderTenant
            item={this.state.services.filter(services => services.featured)[6]}
          />
          <RenderLegal
            item={this.state.services.filter(services => services.featured)[9]}
          />
        </Animatable.View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008E89',
    paddingTop: 15,
    paddingBottom: 10
},
description: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    lineHeight: 20 * 1.5,
},
headerText: {
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#084594',

},
Text: {
    fontFamily: 'Cairo_400Regular',
}
});

export default OurServices;
