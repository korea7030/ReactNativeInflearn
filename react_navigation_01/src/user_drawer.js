import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DrawerUserScreen extends Component {
    render() {
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