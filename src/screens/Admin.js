import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StudentData1 from './StudentData1';
import Companydata1 from './Companydata1';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialTopTabNavigator();

const Admin = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#fa8100" />

            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'white',
                    showLabel: false,
                    showIcon: true,
                    style: { backgroundColor: '#fa8100', },
                    indicatorStyle: { backgroundColor: 'white', height: '8%' },
                }}>
                <Tab.Screen name="StudentData1"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graduation-cap" color={color} style={{ fontSize: 25 }} />),
                    }}
                    component={StudentData1} />

                <Tab.Screen name="Companydata1"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="briefcase" color={color} style={{ fontSize: 25 }} />),
                    }}
                    component={Companydata1} />
            </Tab.Navigator>
        </>
    )
}
export default Admin;