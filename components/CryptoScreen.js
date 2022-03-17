import React, { Component } from 'react';
import { FlatList, ScrollView, Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { CRYPTO } from '../shared/crypto';
import { CAROUSEL } from '../shared/carousel';



function CryptoMission(props) {
    return (
        <Card title={"Crypto Vision"} wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Cryptocurrency is considered to be the most promising innovation for this genereration, and it's booming now! People consider it a perfect investment to secure their future because, it provides financial freedom, and any central authority does not control it. Investors are the sole owner of their currency, and they have full rights to make a transaction over it at any time. Here at Our Helping Hand, we want to help you understand Cryptocurrency and succed in entrepreneuship.</Text>
        </Card>

    )
}


class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crypto: CRYPTO,
            carousel: CAROUSEL,
            activeSections: [],
        };
    }

    static navigationOptions = {
        title: 'Crypto'
    }

    _renderHeader = (section, index, isActive, sections) => {
        return (
            <Animatable.View
                duration={300}
                transition="backgroundColor"
                style={{ backgroundColor: (isActive ? '#FFD32D' : '#008E89') }}>
                <View style={style.header}>
                    <Text style={style.headerText}>{section.title}</Text>
                </View>
            </Animatable.View>
        );
    };

    _renderContent = (section, i, isActive, sections) => {
        return (
            <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: (isActive ? '#FFD32D' : '#008E89') }}>
            <View style={style.description}>
            <Animatable.Text
          duration={300}
          easing="ease-out"
          animation={isActive ? 'zoomIn' : false}>
                <Text>{section.description}</Text>
                </Animatable.Text>
            </View>
            </Animatable.View>
        );
    };

    _updateSections = (activeSections) => {
        this.setState({ activeSections });
    };


    render() {

        const renderCrypto = ({item}) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    leftAvatar={{source:{uri: item.image}}}
                />
            )
        }

        return (
            <ScrollView style={style.container}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <CryptoMission />
                    <Card title={"Crypto Learning"} wrapperStyle={{ margin: 20 }} containerStyle={style.card2}>
                        <Accordion
                            sections={CRYPTO}
                            activeSections={this.state.activeSections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />
                    </Card>
                    <Card title={"Crypto Brokers"} wrapperStyle={{margin:20}}>
            <View>
            <FlatList
                data={this.state.carousel}
                keyExtractor={item => item.id}
                renderItem={renderCrypto}
                scrollEnabled={false}
            />
            </View>
        </Card>
                </Animatable.View>
            </ScrollView>

        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008E89',
        paddingTop: 50
    },
    description: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        lineHeight: 20 * 1.5,
    },
    headerText: {
        fontSize: 21,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#084594'
    },
});

export default Crypto;
