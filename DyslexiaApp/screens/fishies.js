import React, { useEffect, useState, useRef } from "react";
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
import * as Animatable from "react-native-animatable";

// GameEngine imports
import { GameEngine } from "react-native-game-engine";

// systems
import Hangman from "../systems/hangman";

// entities and component
import FishDragArea from "../entities/fishDragArea";
import FishVisuals from "../entities/fishVisuals";
import FishTransition from "../entities/fishTransition";

// function imports
import { resetGame, isResetting } from "../systems/hangman";

// other constants
const { width, height } = Dimensions.get("screen");
const transitionAnimation = require("../assets/animations/fishTransition.json");
const bubbleAnimation = require("../assets/animations/bubbleAnimation.json");
const fishBG = require("../assets/animations/fishiesBG.json");

const Fishies = ({ navigation }) => {
  return (
    <View style={styles.BGcontainer}>
      <LottieView style={styles.BGAnimation} source={fishBG} autoPlay loop />
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            resetGame();
            navigation.navigate("MainMenu");
          }}
        />
        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => resetGame()}
        >
          <Text style={{ alignSelf: "center", fontSize: 25 }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gameEngineContainer}>
        <GameEngine
          systems={[Hangman]}
          entities={{
            fishVisuals: {
              renderer: <FishVisuals />,
            },
            fishDragArea: {
              renderer: <FishDragArea />,
            },
            // fishTransition: {
            //   renderer: <FishTransition/>
            // }
          }}
        ></GameEngine>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  BGcontainer: {
    flex: 1,
    backgroundColor: "#51c9ed",
  },
  BGAnimation: {
    position: "absolute",
    height: "100%",
  },
  menuContainer: {
    flex: 2,
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
  resetButton: {
    alignSelf: "center",
    backgroundColor: "yellow",
    width: width * 0.4,
    height: height * 0.05,
    borderRadius: 20,
    borderWidth: 6,
  },
  gameEngineContainer: {
    flex: 6,
  },
  transitionStyle: {
    width: width,
    height: height,
    top: height / 4,
    alignSelf: "center",
  },
});

export default Fishies;