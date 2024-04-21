import React, { useState } from "react";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

import {isPaused} from "../entities/mover"

export let restartState = false; 
export const setRestartState = (value) => {
  restartState = value;
};

// variables for calculating new position
let newX;
let newY;

// the "padding" beyond the screen of the app
const x = 80;
// # between 0 and x to calculate new position
const rangeOfX = 40;

// variables for calculating new speed
let xSpeed = 0; // 0 by default
let ySpeed = 0;

const min = 0.08;
const range = 0.1;

// calculates new position and speed after mover leaves screen
const restart = (mover) => {
  mover.visible = false;
  do {
    // calculate new random position within padding
    newX =
      (Math.random() < 0.5 ? -1 : 1) * Math.random() * (width + 2 * rangeOfX);
    newY =
      (Math.random() < 0.5 ? -1 : 1) * Math.random() * (height + 2 * rangeOfX);
  } while (
    newX > 0 - x + rangeOfX &&
    newX < width + x - rangeOfX &&
    newY > 0 - x + rangeOfX &&
    newY < height + x - rangeOfX
  );

  mover.position = [newX, newY];

  //console.log("pos", newX, ",", newY);

  // calculate new speed given new position
  xSpeed = (Math.random() * range + min) * (Math.random() < 0.5 ? -1 : 1);
  ySpeed = (Math.random() * range + min) * (Math.random() < 0.5 ? -1 : 1);

  mover.visible = true;
};

// moves mover across screen
const movement = (entities, { time }) => {
  const mover = entities["MOVER"];

  // check if mover is off screen or base case
  if (
    xSpeed == 0 ||
    mover.position[0] < 0 - x ||
    mover.position[0] > width + x ||
    mover.position[1] < 0 - x ||
    mover.position[1] > height + x ||
    restartState == true
  ) {
    restart(mover);
    restartState = false;
  } else if (isPaused == false) {
    // Calculate the new position based on elapsed time
    newX = mover.position[0] + xSpeed * time.delta;
    newY = mover.position[1] + ySpeed * time.delta;

    // Update the mover's position
    mover.position = [newX, newY];
  }

  return entities;
};

export default movement;