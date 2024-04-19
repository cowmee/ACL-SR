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

// GameEngine imports
import { GameEngine } from "react-native-game-engine";
import Matter from "matter-js";

// systems
import bugMove from "../systems/bugMove";

// entities
import Mover from "../../DyslexiaApp/entities/mover";

// other constants
const engine = Matter.Engine.create({ enableSleeping: false });
const world = engine.world;

// buggies game!
const Buggies = ({ navigation }) => {
  console.log(width, ",", height);

  return (
    <View style={styles.container}>
      <View style={styles.gameEngineContainer}>
        <TouchableOpacity
          style={[styles.backButton]}
          onPress={() => navigation.navigate("MainMenu")}
        />
        <GameEngine
          systems={[]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    padding: 30,
    flex: 1,
    backgroundColor: "gray",
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
  gameEngineContainer: {
    flex: 7,
    backgroundColor: "#51c9ed",
  },
});

export default Buggies;
