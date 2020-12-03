import React, { Component } from 'react';
import { Image } from 'react-native';

import Logo from './assets/pics/home.jpg';

class LogoTitle extends Component {
    render() {
        return (
            <Image
                style={{width: 40, height: 40}}
                source={Logo}
            />
        )
    }
}

export default LogoTitle;