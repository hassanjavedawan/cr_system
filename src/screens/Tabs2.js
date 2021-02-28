import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StudentData from './StudentData';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import Profile1 from './Profile1';

const Tab = createMaterialTopTabNavigator();

const Tabs2 = () => {
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
                <Tab.Screen name="Studentdata"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graduation-cap" color={color} style={{ fontSize: 25 }} />),
                    }}
                    component={StudentData} />

                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user-circle" style={{ fontSize: 25 }} color={color} />),
                    }}
                    name="profile" component={Profile} />
            </Tab.Navigator>
        </>
    )
}
export default Tabs2;