import React, {} from "react";
import { View } from "react-native";

const Box = ({ isTouchDetected, onTouchStart, onTouchEnd }) => {
  return (
    <View
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: isTouchDetected ? "yellow" : "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {isTouchDetected ? "Touched!" : "Touch me!"}
    </View>
  );
};

export default Box;