import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { HOMESCREEN } from '../shared/homescreen';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/Volunteer.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
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
            <ScrollView>
                <RenderItem
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[0]}
                />
                <RenderItem
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[0]}
                />
                <RenderItem
                    item={this.state.homescreen.filter(homescreen => homescreen.featured)[0]}
                />

            </ScrollView>
        );
    }
}

export default Home;
