import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class UserScreen extends Component {
    render () {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>User Screen</Text>
            </View>
        )
    }
}

export default UserScreen;