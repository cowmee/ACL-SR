import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

import { isResetting, goTransition, setTransition } from "../systems/hangman";

const { width, height } = Dimensions.get("screen");

const transition = {
  easing: "ease-in-out",
  0: { translateY: -height },
  1: { translateY: height },
};

const FishTransition = () => {
  return (
    <View>
      {goTransition && !isResetting && (
        <Animatable.View
          interationCount={1}
          animation={transition}
          duration={2000}
          onAnimationEnd={() => [console.log("Animation ended"), setTransition(false)]}
        >
          <View
            style={[styles.transitionStyle, { backgroundColor: "white" }]}
          ></View>
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  transitionStyle: {
    position: 'absolute',
    width: width,
    height: height,
    top: height / 4,
    alignSelf: "center",
  },
});

export default FishTransition;
