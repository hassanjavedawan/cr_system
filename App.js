import React, { useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './src/config/AppNavigaion'
import { Root } from "native-base";
import store from './src/store';
import { Provider } from 'react-redux';
export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Provider store={store}>
        <Root>
          <AppNavigation />
        </Root>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({})
