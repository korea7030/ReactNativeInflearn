import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class TabUserScreen extends Component {
    render () {
        return (
            <View styles={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
            </View>
        )
    }
}

export default TabUserScreen;