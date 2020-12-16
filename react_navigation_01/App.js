/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import HomeDrawerScreen from './src/home_drawer';
import UserDrawerScreen from './src/user_drawer';
import LogoTitle from './src/logo';
import { Linking } from 'react-native';
import img from './src/assets/pics/home.jpg';
import SideDrawer from './src/my_drawer';
import TabHome from './src/home_tab';
import TabUser from './src/user_tab';
import TabMessage from './src/message_tab';

const Stack = createStackNavigator();
// drawnavigator를 쓰게되면 header바는 사라짐.
// 쓰려면 custom Component를 추가해야함
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name === 'Home') {
    iconImagePath = require('./src/assets/pics/home.jpg');
  } else if (name === 'User') {
    iconImagePath = require('./src/assets/pics/user.png');
  } else if (name === 'Message') {
    iconImagePath = require('./src/assets/pics/message.png');
  }

  return (
    <Image
      style={{
        width: focused? 30: 20,
        height: focused? 30: 20,
      }}
      source = {iconImagePath}
    />
  )
}
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            },
            labelPosition: 'beside-icon'
          }}
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => (
              TabBarIcon(focused, route.name)
              )
          })}>
          <Tab.Screen name="Home" component={TabHome}/>
          <Tab.Screen name="User" component={TabUser}/>
          <Tab.Screen name="Message" component={TabMessage}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;
