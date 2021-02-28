import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast, } from 'native-base';
import { View, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
var logo = require('../images/cr_logo.png')
import firestore from '@react-native-firebase/firestore';



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [double, setDouble] = useState(false);

    const login = () => {
        if (!email.trim() || !password.trim()) {
            Toast.show({
                text: "'Please enter email and password'",
                type: "danger",
            })
            return;
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((e) => {

                setDouble(true);
                Toast.show({
                    text: "Login Successful",
                    buttonText: "Okay",
                    type: "success"
                })
                navigation.replace('Tab2')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                alert(error)
            });
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fa8100" />
            <Container style={{ backgroundColor: 'whitesmoke' }}>
                <ScrollView>
                    <Content >

                        <Form style={styles.Content}>

                            <Image style={styles.Image} source={logo} />
                            <View >

                                <Text style={styles.text}>Company Login</Text>
                            </View>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }} >
                                <Label style={styles.lable}><Icon name="envelope" style={{ fontSize: 20, }} color='brown' />  Email</Label>
                                <Input name='email-address' keyboardType='email-address' style={styles.Input} value={email} onChangeText={(text) => setEmail(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }} >
                                <Label style={styles.lable} ><Icon name="lock" style={{ fontSize: 20 }} color='brown' />  Password</Label>
                                <Input secureTextEntry={true} style={styles.Input} value={password} onChangeText={(text) => setPassword(text)} />
                            </Item>
                            <Button disabled={double} style={styles.Button} block danger onPress={login}>
                                <Text style={styles.Button_text}>Login </Text>
                            </Button>
                        </Form>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'brown', }}>Create account new user ? </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("RegisterCompanyScreen")}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'blue', }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </ScrollView>
            </Container>
        </>

    )
}
const styles = StyleSheet.create({

    text: {
        alignSelf: "center",
        color: 'brown',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 5,
    },
    Content: {

        display: 'flex',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 0,
        marginTop: 20,
        elevation: 10
    },
    Button_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    Image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 1
    },
    Input: {
        borderBottomWidth: 1,
        borderColor: 'brown',
        // borderLeftWidth: 1,
        borderBottomLeftRadius: 20,
        borderLeftColor: 'brown',
        // borderRightWidth: 1,
        borderRightColor: 'brown',
        borderBottomRightRadius: 20,
        height: 40,
        marginTop: 7,
        paddingRight: 20,
        paddingLeft: 20,


    },
    Button: {
        margin: 40,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fa8100',
        elevation: 10,
    },
    lable: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20
    },
    describtion: {
        textAlign: 'center',
        marginTop: 2,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 33,
        width: '90%',
        borderRadius: 30,
        alignSelf: 'center',
        textShadowColor: '#fa8100',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,

    },

})
