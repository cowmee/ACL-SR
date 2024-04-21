import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");


const GameText = ({ word, guessedLetters, remainingTries }) => {
  //console.log(word, guessedLetters, remainingTries);
  if (word === undefined) {
    return (
      <Text style={{ alignSelf: "center", top: height * 0.2, fontSize: 80 }}>
        Loading...
      </Text>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Word: {displayWord(word, guessedLetters)}
          {"\n"}Guessed: {guessedLetters.join(", ")}
          {"\n"}Remaining tries: {remainingTries}
        </Text>
      </View>
    );
  }
};

function displayWord(word, guessedLetters) {
  let display = "";
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      display += word[i] + " ";
    } else {
      display += "_ ";
    }
  }
  return display;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    top: height * 0.2,
  },
});


export default GameText;