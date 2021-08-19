import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Platform, StyleSheet, Text, View, TouchableOpacity,AsyncStorage } from 'react-native';
import {name as appName} from './app.json';


import Home from './src/Home/Home';


// import Transactions from './src/Transactions';
// import Profile from './src/Profile';
// import Help from './src/Help';


console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  
  Home: {screen: Home},
  
   
});
const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render () {
    return (
        /*<Provider store={store}>*/
          <AppContainer/>
        /*</Provider>*/
    )
  }
}