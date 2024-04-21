import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // import screens
import MainMenuScreen from "./screens/MainMenu.js";
import buggiesScreen from "./screens/buggies.js";
import memoryScreen from "./screens/memory.js";
import fishiesScreen from "./screens/fishies.js";

// navigation constants
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      <Stack.Screen name="Buggies" component={buggiesScreen} />
      <Stack.Screen name="Memory" component={memoryScreen} />
      <Stack.Screen name="Fishies" component={fishiesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
