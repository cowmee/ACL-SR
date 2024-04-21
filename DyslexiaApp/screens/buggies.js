import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
  Text,
  StatusBar,
  AppRegistry,
} from "react-native";
import LottieView from "lottie-react-native";

// GameEngine imports
import { GameEngine } from "react-native-game-engine";

// systems
import bugMove from "../systems/bugMove";

// entities
import Mover from "../../DyslexiaApp/entities/mover";

// other constants
const { width, height } = Dimensions.get("screen");
const grassBG = require("../assets/animations/grassBGAnimation.json");

// buggies game!
const Buggies = ({ navigation }) => {
  console.log("screen dimensions: " + width, ",", height);
  return (
    <View style={styles.container}>
      <LottieView style={styles.BGAnimation} source={grassBG} autoPlay loop />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("MainMenu")}
      />
      <GameEngine
        systems={[bugMove]}
        // entities have a unique id (required)
        // need to pass renderer component to display entity
        entities={{
          MOVER: {
            // default starting position
            position: [width / 2, height / 2],
            renderer: <Mover />,
          },
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BGAnimation: {
    position: "absolute",
    top: 0,
    height: "100%",
  },
  backButton: {
    backgroundColor: "red",
    top: height / 30,
    left: width / 20,
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: 20,
    borderWidth: 6,
  },
});

export default Buggies;
