import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    render () {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>Home Screen</Text>
                <Button 
                    title="To User Screen"
                    onPress={() => {
                        this.props.navigation.navigate('User', {
                            userIdx: 100,
                            userName: 'Gildong',
                            userLastName: 'Hong'
                        })
                    }}/>
            </View>
        )
    }
}

export default HomeScreen;