/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Pciker from './src/picker';
import Steak from './assets/images/steak.jpg';
import Modal from './src/modal';

class App extends Component {
  state = {
    myTextINput: '',
    alphabet: ['a','b','c','d']
  }

  onChangeInput = (event) => {
      this.setState({
          myTextINput: event
      })
  }

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextINput: '',
        alphabet: [...prevState.alphabet, prevState.myTextINput]
      }
    })
  }

  render () {
    return (
      <View style={styles.mainView}>
        {/* <Pciker />
        <TextInput 
                value={this.state.myTextINput} 
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
        <Button
          title="Add Text input"
          onPress={this.onAddTextInput} /> */}
        <Image 
          style={styles.image}
          source={Steak}
          resizeMode="contain"
          
        />
        <Modal />
        {/* <ScrollView style={{width: "100%"}}>
          {
            this.state.alphabet.map((item, idx) => (
              <Text style={styles.mainText} key={idx}>
                {item}
              </Text>
            ))
          }
        </ScrollView> */}
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10, 
    width: '50%',
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input: {
    width: "100%",
    backgroundColor: "#cecece",
    marginTop: 20
  },
  image: {
    width: '100%',
    height: 700
  }
})
export default App;
