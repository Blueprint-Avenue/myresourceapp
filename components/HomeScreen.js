import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { HOMESCREEN } from '../shared/homescreen';
import * as Animatable from 'react-native-animatable';
import { useFonts, Cairo_400Regular, Cairo_900Regular} from '@expo-google-fonts/cairo';

function RenderItem({item}) {
    if (item) {
        return (
            <View>
            <Card
                featuredTitle={item.name0}
                image={require("./images/community-support.png")}
            >
                <Text style={{margin: 10}}>
                    {item.description0}
                </Text>
            </Card>
      </View>
        );
    }
    return <View />;
}
function RenderCard2({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.name1}
             image={require('./images/helping-hands.jpg')}
         >
             <Text style={{margin: 10}}>
                 {item.description2}
             </Text>
         </Card>
      </View>
        );
    }
    return <View />;
}
function RenderCard3({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.name2}
             image={require('./images/Volunteer.jpg')}
         >
             <Text style={{margin: 10}}>
                 {item.description3}
             </Text>
         </Card>
      </View>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homescreen: HOMESCREEN
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (

            <ScrollView style={styles.container}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <RenderItem
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[0]}
                />
                <RenderCard2
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[1]}
                />
                <RenderCard3
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[2]}
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
      paddingTop: 10,

    },
    Text: {
        fontFamily: 'Cairo_400Regular',
    }
});

export default Home;
