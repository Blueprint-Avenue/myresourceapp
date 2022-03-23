import React, { Component } from 'react';
import { FlatList, ScrollView, Text, StyleSheet, View, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { CRYPTO } from '../shared/crypto';
import { CAROUSEL } from '../shared/carousel';
import { useFonts, Cairo_400Regular, Cairo_900Regular} from '@expo-google-fonts/cairo';



function CryptoMission(props) {
    return (
        <Card title={"Crypto Vision"} wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Cryptocurrency is considered to be the most promising innovation for this genereration, and it's booming now! People consider it a perfect investment to secure their future because, it provides financial freedom, and any central authority does not control it. Investors are the sole owner of their currency, and they have full rights to make a transaction over it at any time. Here at Our Helping Hand, we want to help you understand Cryptocurrency and succed in entrepreneuship.</Text>
        </Card>

    )
}

function RenderSaita({item}) {
    if (item) {
        return (
            <View>
            <Card
                featuredTitle={item.title0}
                image={require("./images/saitama.png")}
            >
                <TouchableOpacity onPress={() => Linking.openURL('https://saitamatoken.com/')}>
                <Text style={{margin: 10}}>
                    {item.description0}
                </Text>
                </TouchableOpacity>
            </Card>
      </View>
        );
    }
    return <View />;
}
function RenderShiba({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.title1}
             image={require('./images/shibainu.png')}
         >
             <TouchableOpacity onPress={() => Linking.openURL('https://shibaswap.com/#/')}>
             <Text style={{margin: 10}}>
                 {item.description1}
             </Text>
             </TouchableOpacity>
         </Card>
      </View>
        );
    }
    return <View />;
}
function RenderTrust({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.title2}
             image={require('./images/trust.png')}
         >
             <TouchableOpacity onPress={() => Linking.openURL('https://trustwallet.com/')}>
             <Text style={{margin: 10}}>
                 {item.description2}
             </Text>
             </TouchableOpacity>
         </Card>
      </View>
        );
    }
    return <View />;
}
function RenderCoin({item}) {
    if (item) {
        return (
            <View>
            <Card
                featuredTitle={item.title3}
                image={require("./images/coinbase-logo.png")}
            >
                <TouchableOpacity onPress={() => Linking.openURL('https://www.coinbase.com/')}>
                <Text style={{margin: 10}}>
                    {item.description3}
                </Text>
                </TouchableOpacity>
            </Card>
      </View>
        );
    }
    return <View />;
}
function RenderBina({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.title4}
             image={require('./images/binance.png')}
         >
             <TouchableOpacity onPress={() => Linking.openURL('https://www.binance.us/en/home?gclid=CjwKCAjwxOCRBhA8EiwA0X8hi1zDG3bBspt_rltDyLE74tSSbOl4B_LZm7HDiwO6yAaZmd5X20glxBoClXcQAvD_BwE')}>
             <Text style={{margin: 10}}>
                 {item.description4}
             </Text>
             </TouchableOpacity>
         </Card>
      </View>
        );
    }
    return <View />;
}
function RenderCrypto({item}) {
    if (item) {
        return (
            <View>
             <Card
             featuredTitle={item.title5}
             image={require('./images/color_icon.png')}
         >
              <TouchableOpacity onPress={() => Linking.openURL('https://crypto.com/us/')}>
             <Text style={{margin: 10}}>
                 {item.description5}
             </Text>
             </TouchableOpacity>
         </Card>
      </View>
        );
    }
    return <View />;
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
        style={{ backgroundColor: (isActive ? 'white' : '#008E89') }}>
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

        // const renderCrypto = ({item}) => {
        //     return (
        //         <ListItem
        //             title={item.title}
        //             subtitle={item.description}
        //             leftAvatar={{source:{uri: item.image}}}
        //         />
        //     )
        // }

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
                <RenderSaita
                    item={this.state.carousel.filter(carousel => carousel.featured)[0]}
                />
                <RenderShiba
                    item={this.state.carousel.filter(carousel => carousel.featured)[1]}
                />
                <RenderTrust
                    item={this.state.carousel.filter(carousel => carousel.featured)[2]}
                />
               <RenderCoin
                    item={this.state.carousel.filter(carousel => carousel.featured)[3]}
                />
                <RenderBina
                    item={this.state.carousel.filter(carousel => carousel.featured)[4]}
                />
                <RenderCrypto
                    item={this.state.carousel.filter(carousel => carousel.featured)[5]}
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

export default Crypto;
