import React, { useState, useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Container, Header, Content, Card, CardItem, Button, Thumbnail, Text, Badge, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { getStudentData } from '../store/action'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';


const StudentData = (props) => {
    const db = firestore().collection('Student Data');

    const deleteData = e => {
        db.doc(e)
            .delete()
            .then(() => {
                alert("Document successfully deleted!");
            })
            .catch(error => {
                console.error("Error removing document: ", error);
            });
    };
    useEffect(() => {
        props.getStudentData()
    }, [])
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fa8100" />
            <Container>
                <Content style={{ backgroundColor: 'whitesmoke', }}>
                    {props.studentData.map((v) => {
                        return (
                            <View style={styles.Card} key={v.uid} >
                                <Card transparent >
                                    <CardItem style={styles.CardItem1}>
                                        <Left>
                                            <Body>
                                                <Text style={{ fontWeight: 'bold', fontSize: 22, color: "brown" }}>{v.displayName}</Text>
                                                <Text note >{v.email}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Father Name</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.fatherName}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Qualification </Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.qualification}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Marks</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.marks}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Contact no#</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.phoneNumber}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem2}>

                                        <Body>
                                            <Body>
                                                <Button style={styles.Button} block danger onPress={() => deleteData(v.uid)}>
                                                    <Text style={styles.Button_text}><Icon name="trash" style={{ fontSize: 30, }} color='white' /> </Text>
                                                </Button>
                                            </Body>

                                        </Body>
                                    </CardItem>

                                </Card>
                            </View>

                        )
                    })
                    }
                </Content>
            </Container >

        </>
    )
}

const styles = StyleSheet.create({
    Card: {
        width: "95%",
        alignSelf: 'center',
        marginTop: 10,
        overflow: 'hidden',
        elevation: 5,
        borderRadius: 40,
        alignSelf: "center"

    },
    CardItem: {
        borderLeftWidth: 8,
        borderLeftColor: 'red',
        borderRightWidth: 8,
        borderRightColor: 'red',
    }
    , CardItem1: {

        borderLeftWidth: 4,
        borderLeftColor: 'brown',
        borderTopLeftRadius: 40,
        overflow: 'hidden',
        borderTopRightRadius: 40,
        borderRightWidth: 4,
        borderRightColor: 'brown',
    },
    CardItem2: {
        borderRightWidth: 4,
        borderRightColor: 'brown',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderLeftWidth: 4,
        borderLeftColor: 'brown',
    },
    Button: {
        margin: 30,
        width: '20%',
        alignSelf: 'center',
        backgroundColor: 'red',
        elevation: 10,
        borderRadius:30
    },
    Button_text: {
        fontWeight: 'bold',
        fontSize: 20
    },
})

const mapStateToProps = (state) => ({
    studentData: state.studentData,
})

const mapDispatchToProps = (dispatch) => ({
    getStudentData: () => dispatch(getStudentData())
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentData);