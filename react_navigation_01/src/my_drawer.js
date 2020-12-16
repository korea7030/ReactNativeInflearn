import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native';
import Logo from './assets/pics/test.png';
import { CommonActions } from '@react-navigation/native';

var img = require('./assets/pics/home.jpg');

class SideDrawer extends Component {
    nativateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }
    render () {
        return (
        <View style={styles.imageContainer}>
            <ScrollView>
                <View>
                    <View>
                        <Image
                            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                            style={{width: 200, height: 200}}
                        />
                    </View>
                    <Text style={styles.sectionHeading}>Section 1</Text>
                    <View style={styles.navSectionStyle}>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={this.nativateToScreen('Home')}
                        >Home</Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={this.nativateToScreen('User')}
                        >User</Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => alert('help')}
                        >Help</Text>
                        <Text 
                            style={styles.navItemStyle}
                            onPress={() => alert('info')}
                        >Info</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{paddingLeft: 10, paddingRight: 30}}>
                <Text>Copyright</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    },
    sectionHeading: {
        color: '#fff',
        backgroundColor: '#123123',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyle: {
        backgroundColor: '#04ffb6'
    },
    navItemStyle: {
        padding: 10,
        color: '#fff'
    }
})

export default SideDrawer;