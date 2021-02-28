import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import { StyleSheet, ScrollView, StatusBar, View } from "react-native";
import firestore from '@react-native-firebase/firestore';


const RegisterCompanyScreen = (props) => {
    const [double, setDouble] = useState(false);
    const [email, setEmail] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [qualification, setQualification] = useState('');
    const [seates, setSeates] = useState('');
    const [salary, setSalary] = useState('');
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')

    const db = firestore().collection('Company Data');
    const signUp = () => {
        if (!email.trim() || !CompanyName.trim() || !jobTitle.trim() || !city.trim() || !qualification.trim() || !salary.trim() || !seates.trim() || !password.trim()) {
            Toast.show({
                text: "All feild are required",
                type: "danger",
            })
            return;
        }
        /**
         *  Auth
         */
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                let company_info = {
                    email,
                    CompanyName,
                    jobTitle,
                    qualification,
                    seates,
                    salary,
                    city,
                    password,
                    uid: user.uid
                }
                db.doc(user.uid).set(company_info).then(() => {

                    Toast.show({
                        text: "Sign up  Successful",
                        type: "success"
                    })
                    props.navigation.replace('Tab2')
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!')
                }

                else if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                else if (error.code === 'auth/weak-password') {

                    alert('Password should be at least 6 characters');
                }
                alert(error)
            });
    }

    return (
        <>

            <Container style={{ backgroundColor: 'whitesmoke' }}>
                {/* <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Button bordered block style={{ width: 150, borderColor: 'brown' }} onPress={() => { navigation.navigate("RegisterStudentScreen") }}>
                        <Text style={{ fontWeight: "bold", color: "brown" }} >Student</Text>
                    </Button>
                    <Button bordered block style={{ width: 150, borderColor: 'brown' }} onPress={() => { navigation.navigate("RegisterCompanyScreen") }}>
                        <Text style={{ fontWeight: "bold", color: 'brown' }} >Company</Text>
                    </Button>
                </View> */}
                <StatusBar barStyle="light-content" backgroundColor="#fa8100" />
                <Icon name="address-card" style={{ marginTop: 15, fontSize: 50, textAlign: "center" }} color='#fa8100' />
                <Text style={styles.text}>Job Information</Text>
                <ScrollView>
                    <Content >
                        <Form style={styles.Content}>

                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="building" style={{ fontSize: 20, }} color='brown' />  Company Name</Label>
                                <Input value={CompanyName} keyboardType="default" style={styles.Input} onChangeText={(text) => setCompanyName(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="briefcase" style={{ fontSize: 20, }} color='brown' />  Job Title</Label>
                                <Input value={jobTitle} keyboardType="default" style={styles.Input} onChangeText={(text) => setJobTitle(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="graduation-cap" style={{ fontSize: 20, }} color='brown' /> Qualification Requiremnet</Label>
                                <Input value={qualification} keyboardType="decimal-pad" style={styles.Input} onChangeText={(text) => setQualification(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="check-square-o" style={{ fontSize: 20, }} color='brown' />  Number of Seates</Label>
                                <Input value={seates} keyboardType="number-pad" style={styles.Input} onChangeText={(text) => setSeates(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="location-arrow" style={{ fontSize: 20, }} color='brown' /> City</Label>
                                <Input value={salary} keyboardType="decimal-pad" style={styles.Input} onChangeText={(text) => setSalary(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable}><Icon name="money" style={{ fontSize: 20, }} color='brown' />  Salary</Label>
                                <Input value={city} keyboardType="default" style={styles.Input} onChangeText={(text) => setCity(text)} />
                            </Item>

                            <Item stackedLabel style={{ borderBottomWidth: 0 }} >
                                <Label style={styles.lable}><Icon name="envelope" style={{ fontSize: 20, }} color='brown' />  Email</Label>
                                <Input value={email} keyboardType='email-address' style={styles.Input} onChangeText={(text) => setEmail(text)} />
                            </Item>
                            <Item stackedLabel style={{ borderBottomWidth: 0 }}>
                                <Label style={styles.lable} ><Icon name="lock" style={{ fontSize: 20 }} color='brown' />  Password</Label>
                                <Input value={password} secureTextEntry={true} style={styles.Input} onChangeText={(text) => setPassword(text)} />
                            </Item>
                            <Button style={styles.Button} block danger onPress={signUp} >
                                <Text style={styles.Button_text}>Post Job AD</Text>
                            </Button>
                        </Form>
                    </Content>
                </ScrollView>
            </Container>
        </>
    )
}


export default RegisterCompanyScreen;

const styles = StyleSheet.create({
    header: {
        paddingLeft: 30,
        paddingTop: 30
    },
    text: {
        alignSelf: "center",
        color: "brown",
        fontSize: 24,
        fontWeight: 'bold',

    },
    Content: {
        display: 'flex',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 0,
        marginTop: 20,
        // height: 500
        elevation: 10
    },
    Image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
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
        margin: 30,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fa8100',
        elevation: 10,
    },
    Button_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    lable: {
        color: 'brown',
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    register: {
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 20,
    }
})
