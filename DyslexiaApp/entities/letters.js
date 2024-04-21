/*
Letter entities will represent the choices of letters the user
can choose from.

User will click a letter and the letter will be added to the 
guessed letters

This entity will render and display a letter option for the user
*/

import React, { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useState,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DraxProvider, DraxView } from "react-native-drax";

import { onLetterPress, letters } from "../systems/hangman";

const { width, height } = Dimensions.get("screen");
const radius = 80;

const Letter = (props) => {
  //const { value } = letters[props.letterIndex];
  const value = props.value;

  const x = props.position[0] - radius / 2;
  const y = props.position[1] - radius / 2;

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    // <View style={[styles.container, { left: x, top: y }]}>
    //   <TouchableOpacity
    //     style={{
    //       width: radius,
    //       height: radius,
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //     onPress={() => onLetterPress(value)}
    //   >
    //     <Text style={styles.text}>{value}</Text>
    //   </TouchableOpacity>
    // </View>
    <View style={[styles.container, { left: x, top: y }]}>
        <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    width: radius,
    height: radius,
  },
  text: {
    fontSize: radius * 0.8,
    fontWeight: "bold",
    color: "black",
  },
});

export default Letter;
