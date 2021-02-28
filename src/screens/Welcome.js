import React, { useEffect } from 'react'
import { Button, Container, Content, Text } from "native-base";
import { StyleSheet, View, StatusBar, Image, BackHandler, Alert, ScrollView } from 'react-native'

var logo = require('../images/cr_logo.png')
const Welcome = ({ navigation }) => {
    const backAction = () => {
        Alert.alert("Exit", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor='whitesmoke' />
            <Container style={{ backgroundColor: 'whitesmoke' }}>
                <ScrollView >
                    <Content>

                        <View>
                       
                            <Image style={styles.Image} source={logo} />
                            <Button style={styles.Button} block danger onPress={() => navigation.navigate('Login0')} >
                                <Text style={styles.Button_text}>Admin Login </Text>
                            </Button>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                    <View>
                                        <Text style={{ width: 50, textAlign: 'center', backgroundColor: 'orange', borderRadius: 50, color: 'white' }}>OR</Text>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                </View>
                            </View>
                            <Button style={styles.Button} block danger onPress={() => navigation.navigate('Login1')} >
                                <Text style={styles.Button_text}>Company Login </Text>
                            </Button>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                    <View>
                                        <Text style={{ width: 50, textAlign: 'center', backgroundColor: 'orange', borderRadius: 50, color: 'white' }}>OR</Text>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                </View>
                            </View>
                            <Button style={styles.Button} block danger onPress={() => navigation.navigate("Login")} >
                                <Text style={styles.Button_text}>Student Login</Text>
                            </Button>
                        </View>
                        <Text style={styles.describtion}>Campus Recruitment System</Text>                        
                    </Content>
                </ScrollView>
            </Container>
        </>
    )
}
const styles = StyleSheet.create({
    Image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 50
    },
    describtion: {
        textAlign: 'center',
        marginTop: 3,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 33,
        width: '90%',
        borderRadius: 30,
        alignSelf: 'center',
        textShadowColor: 'brown',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,

    },
    Button: {
        margin: 30,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'brown',
        elevation: 10,
        fontWeight: 'bold',
    },
    Button_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
   

})
export default Welcome
