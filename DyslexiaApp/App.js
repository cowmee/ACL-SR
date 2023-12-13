import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";

// constants
const { width, height } = Dimensions.get("screen");
const colors = ["green", "blue", "red", "orange", "yellow"];

const App = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // changes color of buttons when pressed
  const colorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    console.log(colors[currentColorIndex]);
  };

  const navButton = () => {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors[currentColorIndex] }]}
        onPress={colorChange()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.buttonContainer}>
        {navButton()}
        {navButton()}
        {navButton()}
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#51c9ed",
    flexDirection: "column",
    padding: 20,
  },
  titleContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomContainer: { flex: 0.5 },
  button: {
    height: height * 0.1,
    width: width * 0.8,
  },
});

export default App;
