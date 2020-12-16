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
import HomeScreen from './src/home';
import UserScreen from './src/user';
import HomeDrawerScreen from './src/home_drawer';
import UserDrawerScreen from './src/user_drawer';
import LogoTitle from './src/logo';
import { Linking } from 'react-native';
import img from './src/assets/pics/home.jpg';
import SideDrawer from './src/my_drawer';

const Stack = createStackNavigator();
// drawnavigator를 쓰게되면 header바는 사라짐.
// 쓰려면 custom Component를 추가해야함
const Drawer = createDrawerNavigator();
class App extends Component {
  // CustomDrawerContent = (props) => {
  //   return (
  //     <DrawerContentScrollView {...props} >
  //       <DrawerItemList {...props} />
  //       <DrawerItem 
  //         label="help"
  //         onPress={() => Linking.openURL("http://www.google.com")}
  //         icon={() => <LogoTitle />}
  //       />

  //       <DrawerItem 
  //         label="info"
  //         onPress={() => alert("info Window")}
  //       />
  //     </DrawerContentScrollView>
  //   )
  // }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200
          }}
          // drawer 메뉴 button 에 스타일 주기
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue'
          }}
          drawerContent={props => <SideDrawer {...props} />}
        >
          <Drawer.Screen 
            name="Home" 
            component={HomeDrawerScreen}
            options={{
              drawerIcon: () => {
                <Image source={img} style={{width: 40, height: 40}}/>
              }
            }}/>
          <Drawer.Screen name="User" component={UserDrawerScreen}/>

        </Drawer.Navigator>
        {/* <Stack.Navigator 
          initialRouteName="Home"
          // 공통 스타일 적용
          screenOptions={{
            headerStyle: {
                backgroundColor: '#a4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#f3d612'
            }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerTitle: <LogoTitle />,
              headerRight: () => (
                <Button
                  title="info"
                  onPress={() => alert('btn')}
                  color="orange" /> 
              )}}/>
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
        </Stack.Navigator> */}
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({});

export default App;
