import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import LottieView from "lottie-react-native";
import useSoundAndAnimation from "../systems/soundAndAnimation.js";

const RADIUS = 22;
const colors = ["green", "blue", "red", "orange", "yellow"];

const Mover = (props) => {
  const colorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Use the custom hook to get the burst function and burstRef
  const { burst, burstRef } = useSoundAndAnimation();

  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;

  return (
    <View>
      <View
        style={{
          position: "absolute",
          left: x - RADIUS * 4.3,
          top: y - RADIUS * 4,
        }}
      >
        <LottieView
          source={require("../assets/Burst.json")}
          ref={burstRef}
          loop={false}
          style={styles.burst}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.mover,
          { backgroundColor: colors[currentColorIndex] },
          { left: x, top: y },
        ]}
        onPress={() => {
          colorChange();
          burst();
        }}
      >
        <Text style={styles.text}>B</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mover: {
    borderColor: "black",
    borderWidth: 6,
    borderRadius: RADIUS * 2,
    width: RADIUS * 4,
    height: RADIUS * 4,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  burst: {
    position: "absolute",
    width: RADIUS * 13,
    height: RADIUS * 13,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Mover;
