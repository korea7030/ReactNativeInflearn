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
  state = {
    myContacts: []
  }

  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('ios')
      return true
    } else {
      console.warn('android')

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS
      ]);

      if (
        granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
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
          console.log(contacts);
          this.setState({
            myContacts: contacts
          })
        })
      } else {
        alert('no permission')
      }
    })
  }

  addContacts = () => {
    this.requestContactPermission()
    .then((didGetPermission) => {
      if (didGetPermission) {
        const newContact = {
          emailAddresses: [{
            label: 'work',
            email: 'aaa@example.com'
          }],
          familyName: "Go",
          givenName: "GilDong",
          phoneNumbers: [{
            label: 'mobile',
            number: "(010) 1111-1111"
          }]
        }

        Contacts.addContact(newContact, (err) => {
          console.log(newContact);
          this.getContacts();
        })
      } else {
        alert('no permission')
      }
    })
  }

  OpenForm = () => {
    const newContact = {
      emailAddresses: [{
        label: 'work',
        email: 'aaa@example.com'
      }],
      familyName: "CCC",
      givenName: "GilDong",
      phoneNumbers: [{
        label: 'mobile',
        number: "(010) 1111-1111"
      }]
    }
    // ios 만 지원
    Contacts.openContactForm({newContact} , (err) => {
      if (err) console.warn(err)
    })
  }
  render () {
    return (
      <View style={styles.container}>
          {
            this.state.myContacts.map((item, idx) => (
              <Text key={idx}>
                {item.givenName} {item.familyName}
              </Text>
            ))
          }
        <Button 
          title="Load Contacts"
          onPress={() => this.getContacts()}
        />
        <Button 
          title="Add Contacts"
          onPress={() => this.addContacts()}
        />

        <Button 
          title="Open Form"
          onPress={() => this.OpenForm()}
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