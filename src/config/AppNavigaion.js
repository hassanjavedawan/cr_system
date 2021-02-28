import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs1 from '../screens/Tabs1';
import Tabs2 from '../screens/Tabs2';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen0 from '../screens/LoginScreen0';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen1 from '../screens/LoginScreen1';
import Welcome from "../screens/Welcome"
import Admin from '../screens/Admin'
import RegisterStudentScreen from '../screens/RegisterStudentScreen';
import RegisterCompanyScreen from '../screens/RegisterCompanyScreen';

const Stack = createStackNavigator();
export default AppNavigaion = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{
                        headerShown: false,
                    
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Wahlcome`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="Welcome" component={Welcome} />
                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Admin dashboard`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="Admin" component={Admin} />

                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Admin Login`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="Login0" component={LoginScreen0} />
                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `LOGIN`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="Login" component={LoginScreen} />

                    <Stack.Screen options={{
                        headerShown: true,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `LOGIN`,
                        headerLeft: null,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="Login1" component={LoginScreen1} />

                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Available Job`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 28
                        },
                    }} name="Tab1" component={Tabs1} />
                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Student Data`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 28
                        },
                    }} name="Tab2" component={Tabs2} />

                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Create Account`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="RegisterCompanyScreen" component={RegisterCompanyScreen} />



                    <Stack.Screen options={{
                        headerShown: true,
                        headerLeft: null,
                        headerStyle: { backgroundColor: '#fa8100', },
                        headerTitle: `Create Account`,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 28
                        },
                    }} name="RegisterStudentScreen" component={RegisterStudentScreen} />



                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

