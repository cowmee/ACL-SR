import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("screen");
const colors = ["#d86234", "#F08700", "#F49F0A", "#EFCA08", "#ffeb37"];

const MainMenu = ({ navigation }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colorChange = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // references to each button so animation will play everytime the screen is focused
  const firstButtonRef = React.useRef(null);
  const secondButtonRef = React.useRef(null);
  const thirdButtonRef = React.useRef(null);

  // useEffect to trigger the animations when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // trigger the bounceInLeft animation for each TouchableOpacity
      if (firstButtonRef.current) {
        firstButtonRef.current.bounceInLeft(1000);
      }

      if (secondButtonRef.current) {
        secondButtonRef.current.bounceInRight(1500);
      }

      if (thirdButtonRef.current) {
        thirdButtonRef.current.bounceInLeft(2000);
      }

      // optional cleanup function when the screen is unfocused (I won't do anything here as of right now)
      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Animatable.Text
          style={styles.title}
          animation="slideOutDown"
          iterationCount="infinite"
          direction="alternate"
          duration={2000}
        >
          Dyslexia App 🤩
        </Animatable.Text>
      </View>
      {/* button view */}
      <View style={styles.buttonContainer}>
        <Animatable.View ref={firstButtonRef}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors[currentColorIndex] },
            ]}
            onPress={() => navigation.navigate("Buggies")}
          >
            <Text style={styles.buttonText}>Buggies!</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View ref={secondButtonRef}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors[currentColorIndex] },
            ]}
            onPress={() => navigation.navigate("Memory")}
          >
            <Text style={styles.buttonText}>Memory🧠</Text>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View ref={thirdButtonRef}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors[currentColorIndex] },
            ]}
            onPress={() => navigation.navigate("Fishies")}
          >
            <Text style={styles.buttonText}>Fish.</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
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
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: height * 0.11,
    width: width * 0.75,
    borderRadius: 20,
    borderWidth: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MainMenu;
