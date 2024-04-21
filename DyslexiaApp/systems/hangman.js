import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// variables to export
export let selectedLetter = "";
export let guessedLetters = [];
export let guessedIndeces = [];
export let remainingTries = 6;
export let letters = [];
export let word = "";

export let isResetting = false;
export let goTransition = false;

export const setTransition = (transition) => {
  goTransition = transition;
};

// resets the game
export const resetGame = () => {
  // resetting variables
  selectedLetter = "";
  guessedLetters = [];
  guessedIndeces = [];
  remainingTries = 6;
  letters = [];
  let prevWord = word;

  // choosing a word + randomizing letters in letter bank
  const wordbank = ["DOG", "GUY", "CAT", "BEE", "TOY", "PIG"];
  while (word == prevWord) {
    word = wordbank[Math.floor(Math.random() * wordbank.length)];
  }

  const letterBank = [
    "D",
    "O",
    "G",
    "A",
    "T",
    "C",
    "B",
    "P",
    "E",
    "U",
    "Y",
    "I",
  ];

  // add letters from the word to letters
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // add 4 random letters
  for (let i = 0; i < 4; i++) {
    let randomLetter =
      letterBank[Math.floor(Math.random() * letterBank.length)];

    if (!letters.includes(randomLetter)) {
      letters.push(randomLetter);
    } else {
      i--; // repeat attempt if letter already exists
    }
  }

  console.log("random letters added: ", letters);

  // randomize indeces of letterBank
  letters.sort(() => Math.random() - 0.5);

  console.log("game reset");
  console.log("word:", word);

  isResetting = false;
};

// function that will be called when the user presses a letter
export const onLetterPress = (letter, letterPosition) => {
  console.log(letter);

  if (!guessedLetters.includes(letter)) {
    // logic to check if letter is in correct position in word
    const letterIndex = word.indexOf(letter);
    console.log("letterIndex= ", letterIndex);
    if (letterIndex == letterPosition) {
      guessedLetters.push(letter);
      guessedIndeces.push(letterIndex);
      console.log("guessed letters: ", guessedLetters);
      console.log("guessed indeces: ", guessedIndeces);
    }
  }

  remainingTries--

};

resetGame();

const Hangman = (entities) => {
  // resets if game is won
  if (isGameWon()) {
    isResetting = true;
    setTimeout(() => {
      if (isResetting) {
        isResetting = false;
        goTransition = true;
        resetGame();
      }
    }, 1700); // time to wait before transition
  }
  return entities;
};

// checks if game is won
const isGameWon = () => {
  // if word is guessed or if the user clicks to another screen -> reset the game
  const wordLetters = new Set(word.split(""));

  for (let letter of wordLetters) {
    if (!guessedLetters.includes(letter)) {
      return false;
    }
  }

  return true;
};

export default Hangman;
