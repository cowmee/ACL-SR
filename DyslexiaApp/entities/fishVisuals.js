import { View, Text, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

import { word } from "../systems/hangman";

const {width, height} = Dimensions.get("screen");

// animations
const fishAnimation = require("../assets/animations/theFish.json");

const beeAnimation = require("../assets/animations/beeAnimation.json");
const catAnimation = require("../assets/animations/catAnimation.json");
const dogAnimation = require("../assets/animations/dogAnimation.json");
const guyAnimation = require("../assets/animations/guyAnimation.json");
const pigAnimation = require("../assets/animations/pigAnimation.json");
const toytrainAnimation = require("../assets/animations/toytrainAnimation.json");

const thoughtBubble = require("../assets/animations/thoughtBubbleAnimation.json");

const fishVisuals = () => {

    // determine current animation based on current word

    const animationList = {
      "BEE": beeAnimation,
      "CAT": catAnimation,
      "DOG": dogAnimation,
      "GUY": guyAnimation,
      "PIG": pigAnimation,
      "TOY": toytrainAnimation
    };
    let currentAnimation = animationList[word.toUpperCase()];

  return (
    <View style={styles.visualsContainer}>
      {/* <View style={styles.fishSpriteContainer}>
        <LottieView style={styles.theFish}  source={fishAnimation} autoPlay loop />
      </View> */}
      <View style={styles.visuals}>
        <LottieView
          style={styles.thoughtBubble}
          source={thoughtBubble}
          autoPlay
          loop
        />
        <LottieView source={currentAnimation} autoPlay loop />
      </View>
    </View>
  );
};

export default fishVisuals;

const styles = StyleSheet.create({
  visualsContainer: {
    flex: 3,
    flexDirection: 'row'
    //backgroundColor: "white",
  },
  fishSpriteContainer: {
    flex: 2,
    alignItems: 'center'
  },
  visuals: {
    flex: 3,
    alignItems: 'center'
  },
  theFish: {
    position: 'absolute',
    width: '120%'
  },
  thoughtBubble: {
    position: 'abosolute',
    width: "100%",
  }
});
