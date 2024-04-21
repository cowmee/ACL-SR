import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { DraxProvider, DraxView } from "react-native-drax";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Letter } from "../entities/letters";
import { letters, onLetterPress, guessedIndeces, remainingTries } from "../systems/hangman";

const { width, height } = Dimensions.get("screen");

// change styles of recievers on drag events
rStyles = {
  blank: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 15,
    borderRadius: 10,
  },
  hover: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    margin: 15,
    borderRadius: 10,
  },
  full: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },
};

let recievers = {
  reciever1: rStyles.blank,
  reciever2: rStyles.blank,
  reciever3: rStyles.blank,
};

let guessedLetters = ["", "", ""];

// Creates the DraxView for all of the draggable components to the scene
// Create 3 recievers
// Import values from Letters.js for draggable objects
const FishDragArea = () => {
  for (i = 0; i < 3; i++) {
    if (guessedIndeces.includes(i)) {
      recievers[`reciever${i + 1}`] = rStyles.full;
    } else {
      recievers[`reciever${i + 1}`] = rStyles.blank;
    }
  }

  if (remainingTries === 6) {
    guessedLetters = ["", "", ""];
  }

  // this code is not fun to look at whoops
  return (
    <GestureHandlerRootView style={{ flex: 7 }}>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.receiversContainer}>
            <DraxView
              style={recievers.reciever1}
              onReceiveDragEnter={({ dragged: { payload } }) => {
                console.log(`hello ${payload}`);
              }}
              onReceiveDragExit={({ dragged: { payload } }) => {
                console.log(`goodbye ${payload}`);
              }}
              onReceiveDragDrop={({ dragged: { payload } }) => {
                console.log(`1 received ${payload}`);
                onLetterPress(payload, 0);
                guessedLetters[0] = payload;
                console.log("guessedLetters: ", guessedLetters);
              }}
            >
              {recievers.reciever2 === rStyles.full && (
                <Text style={styles.text}>{guessedLetters[0]}</Text>
              )}
            </DraxView>
            <DraxView
              style={recievers.reciever2}
              onReceiveDragEnter={({ dragged: { payload } }) => {
                console.log(`hello ${payload}`);
              }}
              onReceiveDragExit={({ dragged: { payload } }) => {
                console.log(`goodbye ${payload}`);
              }}
              onReceiveDragDrop={({ dragged: { payload } }) => {
                console.log(`2 received ${payload}`);
                onLetterPress(payload, 1);
                guessedLetters[1] = payload;
                console.log("guessedLetters: ", guessedLetters);
              }}
            >
              {recievers.reciever2 === rStyles.full && (
                <Text style={styles.text}>{guessedLetters[1]}</Text>
              )}
            </DraxView>
            <DraxView
              style={recievers.reciever3}
              onReceiveDragEnter={({ dragged: { payload } }) => {
                console.log(`hello ${payload}`);
              }}
              onReceiveDragExit={({ dragged: { payload } }) => {
                console.log(`goodbye ${payload}`);
              }}
              onReceiveDragDrop={({ dragged: { payload } }) => {
                console.log(`3 received ${payload}`);
                onLetterPress(payload, 2);
              }}
            />
          </View>
          <View style={styles.draggableContainer}>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[0]}
            >
              <Text style={styles.text}>{letters[0]}</Text>
            </DraxView>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[1]}
            >
              <Text style={styles.text}>{letters[1]}</Text>
            </DraxView>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[2]}
            >
              <Text style={styles.text}>{letters[2]}</Text>
            </DraxView>
          </View>
          <View style={styles.draggableContainer}>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[3]}
            >
              <Text style={styles.text}>{letters[3]}</Text>
            </DraxView>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[4]}
            >
              <Text style={styles.text}>{letters[4]}</Text>
            </DraxView>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[5]}
            >
              <Text style={styles.text}>{letters[5]}</Text>
            </DraxView>
            <DraxView
              style={styles.draggable}
              onDragStart={() => {
                console.log("start drag");
              }}
              payload={letters[6]}
            >
              <Text style={styles.text}>{letters[6]}</Text>
            </DraxView>
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  receiversContainer: {
    flexDirection: "row",
  },
  draggableContainer: {
    margin: 10,
    flexDirection: "row",
  },
  draggable: {
    width: width / 5,
    height: height / 10,
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 100 * 0.8,
    fontWeight: "bold",
    color: "black",
  },
});

export default FishDragArea;
