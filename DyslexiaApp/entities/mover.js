import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import LottieView from "lottie-react-native";
import useSoundAndAnimation from "../systems/soundAndAnimation.js";

import { setRestartState } from "../systems/bugMove";

export let isPaused = false;
export const setPauseState = (value) => {
  isPaused = value;
};

const RADIUS = 22;
const delay = 1500;

// require needs a static string literal, not a variable

const beeAnimation = require("../assets/animations/beeAnimation.json");
const catAnimation = require("../assets/animations/catAnimation.json");
const dogAnimation = require("../assets/animations/dogAnimation.json");
const guyAnimation = require("../assets/animations/guyAnimation.json");
const pigAnimation = require("../assets/animations/pigAnimation.json");
const toytrainAnimation = require("../assets/animations/toytrainAnimation.json");

export const types = [
  {
    letter: "B",
    color: "red",
    sound: require("../assets/audio/b__.mp3"),
    animation: beeAnimation,
  },
  {
    letter: "C",
    color: "orange",
    sound: require("../assets/audio/c__.mp3"),
    animation: catAnimation,
  },
  {
    letter: "D",
    color: "yellow",
    sound: require("../assets/audio/d__.mp3"),
    animation: dogAnimation,
  },
  {
    letter: "G",
    color: "green",
    sound: require("../assets/audio/g__.mp3"),
    animation: guyAnimation,
  },
  {
    letter: "P",
    color: "blue",
    sound: require("../assets/audio/p__.mp3"),
    animation: pigAnimation,
  },
  {
    letter: "T",
    color: "purple",
    sound: require("../assets/audio/t__.mp3"),
    animation: toytrainAnimation,
  },
];

// choose a random letter
export let typeIndex = 0;

const randomType = () => {
  const randomIndex = Math.floor(Math.random() * types.length);
  console.log("changed typeIndex to: ", randomIndex);
  console.log("color: ", types[randomIndex].color);
  typeIndex = randomIndex;
  //return types[randomIndex];
};


const Mover = (props) => {

  // Use the custom hook to get the burst function and burstRef
  const { burst, burstRef } = useSoundAndAnimation();

  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;

  return (
    <View>
      <View
        style={{
          position: "absolute",
          left: x + 70,
          top: y - 18,
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../assets/animations/Burst.json")}
          ref={burstRef}
          loop={false}
          style={styles.burst}
        />
      </View>

      <View style={{ position: "absolute", left: x, top: y }}>
        <LottieView
          source={types[typeIndex].animation}
          autoPlay={true}
          loop={true}
          style={{
            width: RADIUS * 6,
            height: RADIUS * 6,
          }}
        />
      </View>
      <TouchableOpacity
        //style={[styles.mover, { backgroundColor: color }, { left: x, top: y }]}
        style={[styles.mover, { left: x, top: y }]}
        onPress={() => {
          isPaused = true;
          burst();

          setTimeout(() => {
            isPaused = false;
            setRestartState(true);
            randomType();
          }, delay);
        }}
      >
        {isPaused && (
          <Text style={styles.text}> {types[typeIndex].letter} </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mover: {
    // borderColor: "black",
    // borderWidth: 6,
    // borderRadius: RADIUS * 2,
    width: RADIUS * 6,
    height: RADIUS * 6,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  burst: {
    position: "absolute",
    width: RADIUS * 8,
    height: RADIUS * 8,
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
  },
});

export default Mover;
