import React, { useState, useEffect } from 'react'
import { StyleSheet, View, StatusBar, } from 'react-native'
import { Container, Header, Content, Card, Text, CardItem, Thumbnail, Button, Badge, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { getCompanyData } from '../store/action'
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const Companydata = (props) => {
    const db = firestore().collection('Company Data');
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
        props.getCompanyData()
    }, [])
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fa8100" />
            <Container>
                <Content style={{ backgroundColor: 'whitesmoke', }}>
                    {props.companyData.map((v) => {
                        return (
                            <View style={styles.Card} key={v.uid} >
                                <Card transparent >
                                    <CardItem style={styles.CardItem1}>
                                        <Left></Left>
                                            <Body>
                                                <Text style={{ fontWeight: 'bold', fontSize: 22, color: "brown" }}>{v.CompanyName}</Text>
                                                <Text>{v.email}</Text>
                                            </Body>
                                      <Right></Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Job Title</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.jobTitle}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Qualification Requiremnet</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.qualification}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>No of Seates</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.seates}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Salary Rs:</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.salary}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem}>
                                        <Left>
                                            <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 20 }}>Adress</Text>
                                        </Left>
                                        <Right>
                                            <Body>
                                                <Text>{v.city}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem style={styles.CardItem2}>
                                        <Body>
                                            <Button style={styles.Button} block danger onPress={() => deleteData(v.uid)}>
                                                <Text style={styles.Button_text}><Icon name="trash" style={{ fontSize: 30, }} color='white' /> </Text>
                                            </Button>
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
    companyData: state.companyData,
})

const mapDispatchToProps = (dispatch) => ({
    getCompanyData: () => dispatch(getCompanyData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Companydata);