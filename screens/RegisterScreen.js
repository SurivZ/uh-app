import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const setData = () => {
    if (user.length==0){

    }
    Alert.alert('Registered successfully', 'Now sign in');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder='C.C.'
        keyboardType={'number-pad'}
        onChangeText={(value) => setUser(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Name'
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='lastname'
        onChangeText={(value) => setLastname(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Phone'
        onChangeText={(value) => setPhone(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        password={true}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='confirm password'
        password={true}
        secureTextEntry={true}
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={setData}
      >
        <Text style={styles.textButton}>Sing up</Text>
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
    borderRadius: 5,
    backgroundColor: '#ffffff',
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
});