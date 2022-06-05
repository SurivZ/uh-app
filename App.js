import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AdminScreen from "./screens/AdminScreen";
import PatientScreen from "./screens/PatientScreen";
import DoctorsScreen from "./screens/DoctorsScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#393939'
          },
          headerTintColor: '#ffffff'
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
        />
        <Stack.Screen
          name="Doctors"
          component={DoctorsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <MainStack />
  );
}