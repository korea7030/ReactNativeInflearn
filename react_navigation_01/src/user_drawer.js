import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Logo from './assets/pics/home.jpg';

class DrawerUserScreen extends Component {
    drawerStyle = () => {
        this.props.navigation.setOptions({
            drawerIcon: () => {
                <Image
                    source={Logo}
                    style={{width: 40, height: 40}}
                />
            }
        })
    }
    render() {
        this.drawerStyle();
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button
                    title="To Home screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                ></Button>
            </View>
        )
    }
}

export default DrawerUserScreen;