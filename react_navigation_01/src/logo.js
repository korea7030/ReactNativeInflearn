import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import Logo from './assets/pics/home.jpg';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

class LogoTitle extends Component {
    render() {
        return (
            <Image
                style={styles.tinyLogo}
                source={require('./assets/pics/home.jpg')}
            />
        )
    }
}

export default LogoTitle;