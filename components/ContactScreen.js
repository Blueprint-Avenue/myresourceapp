import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Button, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import { useFonts, Cairo_400Regular, Cairo_900Regular} from '@expo-google-fonts/cairo';

function About(props) {
    return (
        <Card title={"About Our Community"} wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Our Helping hand works to enhances people's quality of life and to assist in that person reaching his or her greatest potential though finding the right resources in their community. This includes services for Mental Health, Domestic Abuse, Elder Abuse, Homeless Shelters, Tenant Help, Food Pantries, Credit Builder Services, and Free Legal Services.</Text>
        </Card>

    )
}

class Contact extends Component {

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['skmcintosh@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <About />
                    <Card title={"Contact Information"} wrapperStyle={{ margin: 20 }}>
                        <Text>3343 Peachtree Rd NE Ste 145-740</Text>
                        <Text>Atlanta, GA 30326</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                        <Text>
                            Email:
                            O.H.H@macsventuregroup.com
                        </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: '#085E7D', margin: 40 }}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{ marginRight: 10 }}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
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
        paddingBottom: 15
    },
    Text: {
        fontFamily: 'Cairo_400Regular',
    }
});

export default Contact;
