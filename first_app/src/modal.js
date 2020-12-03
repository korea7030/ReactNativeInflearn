/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

class ModalComponent extends Component {
    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false: true
        })
    }

    render() {
        return (
            <View style={{width:"100%"}}>
                <Button
                    title="open modal"
                    onPress={this.handleModal}
                />
                <Modal
                    visible={this.state.modal}
                    animationType={'slide'} // slide fade
                    onShow={() => alert('warning!')}
                >
                    <View style={{marginTop: 60, backgroundColor: 'red'}}>
                        <Text>this is modal content</Text>
                    </View>

                    <Button
                        title="go back"
                        onPress={this.handleModal}
                    />
                </Modal>
            </View>
        )
    }
}


export default ModalComponent;