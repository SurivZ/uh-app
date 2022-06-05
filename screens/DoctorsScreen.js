import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function DoctorScreen() {
  return (
    <View style={styles.container}>
      <Text>Registro</Text>
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
  title: {},
});