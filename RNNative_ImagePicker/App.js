/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker'; 

// var ImagePicker = require('react-native-image-picker');

class App extends Component {  
  state = {
    avatar: ''
  }

  addImage = () => {
    // 카메라 실행 및 찍기
    // ImagePicker.launchCamera({}, response=>{
    //   this.setState({
    //     avatar: response.uri
    //   })
    // })
    // 갤러리 라이브러리 불러오기
    // ImagePicker.launchImageLibrary({}, response=> {
    //   this.setState({
    //     avatar: response.uri
    //   })
    // })
    // 사진찍기 및 라이브러리 불러오기
    ImagePicker.showImagePicker({
      title: 'CHoose your photo',
      takePhotoButtonTitle: 'Take a pretty one',
      chooseFromLibraryButtonTitle: 'Select an old one',
      cancelButtonTitle: 'Just go back'
    }, response=> {
      this.setState({
        avatar: response.uri
      })
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Image 
        source={{uri: this.state.avatar}}
        style={styles.avatar}/>
        <Button 
          title="Add an Image"
          onPress={() => this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avatar: {
    width: '100%',
    height: 400
  }
})

export default App; 