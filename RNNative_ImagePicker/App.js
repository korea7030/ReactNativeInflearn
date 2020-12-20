/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  PermissionsAndroid,
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
import Contacts from 'react-native-contacts';

// var ImagePicker = require('react-native-image-picker');

class App extends Component {
  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('ios')
      return true
    } else {
      console.warn('android')

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.REACD_CONTACTS
      ]);

      if (
        granted('android.permission.READ_CONTACTS') === PermissionsAndroid.RESULTS.GRANTED &&
        granted('android.permission.WRITE_CONTACTS') === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true
      } else {
        return false
      }
    }
  }

  getContacts = () => {
    this.requestContactPermission()
    .then((didGetPermission) => {
      if (didGetPermission) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            throw err;
          }
          console.warn(contacts)
        })
      } else {
        alert('no permission')
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Button 
          title="Load Contacts"
          onPress={() => this.getContacts()}
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