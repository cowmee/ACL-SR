import Matter from "matter-js";
import { Dimensions } from "react-native";

/* BoxDrop.js is a system that creates a box and adds it to the world.
It can add multiple boxes.
*/

// declaring constants
const { width, height } = Dimensions.get("screen");
const boxSize = Math.trunc(Math.max(width, height) * 0.08);

let boxIds = 0;
const CreateBox = (entities, { touches, screen }) => {
  let world = entities["physics"].world;
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      let body = Matter.Bodies.rectangle(
        t.event.pageX,
        t.event.pageY,
        boxSize,
        boxSize
      );
      Matter.World.add(world, [body]);
      entities[++boxIds] = {
        body: body,
        size: [boxSize, boxSize],
        renderer: Box,
      };
    });
  return entities;
};

export default CreateBox;