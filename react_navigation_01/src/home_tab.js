import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class TabHomeScreen extends Component {
    render () {
        return (
            <View styles={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default TabHomeScreen;