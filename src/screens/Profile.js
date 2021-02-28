import { StyleSheet, View, StatusBar } from 'react-native'
import { Body, Container, Content, Text, Thumbnail, Card, CardItem, Right, Left, Button, Toast } from "native-base";
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { curruntUserData } from "../store/action";
const Profile = (props) => {
    const [double, setDouble] = useState(false);
    const signOut = () => {
        auth()
            .signOut()
            .then(() => Toast.show({
                text: "Sign Out!",
                buttonText: "Okay",
                type: 'danger'
            }),
                setDouble(true),
                navigation.replace('Login')
            )
    }
    console.log(props.curruntUser)
    useEffect(() => {
        props.curruntUserData()
    }, [])



    return (

        <Container>
            <Content padder style={{ backgroundColor: 'whitesmoke' }}>
                {(props.curruntUser.map((v) => {
                    return (<View  key={v.uid} >
                        <View style={styles.userDetail} >
                            <Icon name="address-card" style={{ marginTop: 10, fontSize: 50, textAlign: "center" }} color='#fa8100' />

                            <Text style={styles.organ}>Company Profile</Text>
                            <Text style={styles.userName}>{v.CompanyName}</Text>
                        </View>
                        <Card transparent>
                            <CardItem style={styles.userDetail}>
                                <Left>

                                    <Body>
                                        <Text style={styles.Cardtext}>Job Title</Text>
                                        <Text >{v.jobTitle}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Body>
                                        <Text style={styles.Cardtext}>Seates</Text>
                                        <Text >{v.seates}</Text>
                                    </Body>

                                </Right>
                            </CardItem>
                        </Card>

                        <Card transparent>
                            <CardItem style={styles.userDetail}>
                                <Left>

                                    <Body>
                                        <Text style={styles.Cardtext}>Salary</Text>
                                        <Text >{v.salary}</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Body>
                                        <Text style={styles.Cardtext} >City</Text>
                                        <Text >{v.city}</Text>
                                    </Body>

                                </Right>
                            </CardItem>
                        </Card>
                        <Card transparent>
                            <CardItem style={styles.userDetail}>
                                <Left>
                                    <Text style={styles.Cardtext}>Email</Text>
                                    <Text>{v.email}</Text>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card transparent>
                            <CardItem style={styles.userDetail}>
                                <Left>
                                    <Text style={styles.Cardtext}>Qualification Requiremnet</Text>
                                    <Text>{v.qualification}</Text>
                                </Left>
                            </CardItem>
                        </Card>
                    </View>
                    )
                })
                )}
                <Button disabled={double} style={styles.Button} block danger onPress={signOut}>
                    <Text style={styles.Button_text}>Sign Out </Text>
                </Button>
            </Content>
        </Container>

    )
}


const mapStateToProps = (state) => ({
    curruntUser: state.curruntUser,
})

const mapDispatchToProps = (dispatch) => ({
    curruntUserData: () => dispatch(curruntUserData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
const styles = StyleSheet.create({
    userDetail: {
        backgroundColor: 'white',
        width: "100%",
        borderRadius: 30,
        borderLeftWidth: 6,
        borderLeftColor: 'brown',
        borderRightWidth: 6,
        borderRightColor: 'brown',
        borderTopWidth: 1,
        borderTopColor: 'red',
        elevation: 2
    },

    userName: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: 'brown'
    },

    organ: {
        textAlign: 'center',
        fontSize: 20,
        color: '#757575',
        fontWeight: 'bold',
        marginBottom: 10
    },
    Cardtext: {
        fontWeight: 'bold',
        color: 'brown',
        fontSize: 19
    },
    medical: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 20,
        height: 150
    },
    Button: {
        width: '70%',
        alignSelf: "center",
        backgroundColor: '#fa8100',
        elevation: 4,
        margin: 35
    },
    Button_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
})

