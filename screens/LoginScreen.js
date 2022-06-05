import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

import logo from '../assets/logo.png';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const setData = () => {
    if (user.length == 0) {
      if (password.length == 0) {
        Alert.alert('Empty username and password entries', 'Please complete the fields')
      } else {
        Alert.alert('Empty username input', 'Please complete the field')
      }
    } else {
      if (password.length == 0) {
        Alert.alert('Empty password input', 'Please complete the field')
      } else {
        if (user == '100' && password == '000') {
          navigation.navigate('Patient');
        } else {
          Alert.alert('Wrong username and/or password', 'Try again');
        }
      }
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='C.C.'
        keyboardType={'number-pad'}
        onChangeText={(value) => setUser(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        password={true}
        secureTextEntry={!showPassword}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={setData}
      >
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => { navigation.navigate('Register') }}
      >
        <Text style={styles.text}>Don't have an account?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ffffff",

  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  button: {
    width: '35%',
    height: 50,
    borderWidth: 1,
    borderColor: '#00f',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00f',
  },
  registerButton: {
    marginTop: 15,
    width: '80%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
  },
});
