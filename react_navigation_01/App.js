/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen 
            name="User" 
            component={UserScreen}
            initialParams={{
              userIdx: 50,
              userName: 'Gildong',
              userLastName: 'Go'
            }}
            // options={{
            //   title: 'User Screen',
            //   headerStyle: {
            //       backgroundColor: 'pink'
            //   },
            //   headerTintColor: 'red',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     color: 'purple'
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;
