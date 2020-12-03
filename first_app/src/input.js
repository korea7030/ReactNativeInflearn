/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class Input extends Component {
    state = {
        myTextINput: ''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextINput: event            
        })
    }

    render () {
        return (
        <View style={styles.mainView}>
            <TextInput 
                value={this.state.myTextINput} 
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
        </View>
        
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%"
    },
    input: {
        width: "100%",
        backgroundColor: "#cecece",
        marginTop: 20
    }
})

export default Input;
