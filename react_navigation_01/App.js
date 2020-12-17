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
import StackHomeScreen from './src/home';
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
import Icon from 'react-native-vector-icons/Ionicons';

/*
Stack.Navigator
 - Tab Navigator
  - Tab Screen D
 - Stack.Screen A
 - Stack.Screen B
*/
const Stack = createStackNavigator();
// drawnavigator를 쓰게되면 header바는 사라짐.
// 쓰려면 custom Component를 추가해야함
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

MainScreen = () => {
  return (
    <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef'
            },
            labelPosition: 'below-icon'
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
  )
}
const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName;
  let iconSize;

  if (name === 'Home') {
    iconName = 'home-outline'
  } else if (name === 'User') {
    iconName = 'people-outline'
  } else if (name === 'Message') {
    iconName = 'mail-outline'
  }

  iconSize = focused ? 30 : 20
  return (
    <Icon
      name={iconName}
      size={iconSize}
    />
  )
}
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;
