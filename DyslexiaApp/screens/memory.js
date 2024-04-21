import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { DraxProvider, DraxView } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const {width, height} = Dimensions.get("screen");

const transition = {
    easing: 'ease-in-out',
    0: {'translateY': -height},
    //easing: 'ease-out',
    1: {'translateY': height}
    // from: "slideInDown",
    // to: "slideOutDown",
}

const Memory =({navigation})=> {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate("MainMenu");
        }}
      />
      <Animatable.View
        interationCount={1}
        animation={transition}
        duration={2000}
        onAnimationEnd={() => console.log("Animation ended")}
      >
        <View
          style={[styles.transitionStyle, { backgroundColor: "white" }]}
        ></View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#51c9ed",
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
  transitionStyle: {
    width: width,
    height: height,
    top: height/4,
    alignSelf: "center",
  },
});

export default Memory