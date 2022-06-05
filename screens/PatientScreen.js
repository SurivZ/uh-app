import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import logo from "../assets/logo.png"

export default function PatientHome() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.title}>100</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Alert.alert('Feature under development') }}
      >
        <Text style={styles.textButton}>Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Alert.alert('Feature under development') }}
      >
        <Text style={styles.textButton}>Medicines</Text>
      </TouchableOpacity>


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
  logo: {
    // flex: 1,
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingHorizontal: 10,
    marginVertical: 15,
  }
});