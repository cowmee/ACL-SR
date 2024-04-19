import { useRef } from "react";
import { Audio } from "expo-av";

const playSoundAndAnimation = async (burstRef) => {
  burstRef.current.play();

  try {
    // creates a new instance of Audio.Sound
    const sound = new Audio.Sound();
    await sound.loadAsync(require("../assets/BOING.mp3"));
    await sound.playAsync();

    // waits for sound to finish before playing the Lottie animation
    await sound.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) {
        return;
      }

      if (status.didJustFinish) {
        sound.unloadAsync(); // unload sound after it finishes
      }
    });
  } catch (error) {
    console.error("Error playing sound", error);
  }
};

const useSoundAndAnimation = () => {
  const burstRef = useRef();

  const burst = () => {
    playSoundAndAnimation(burstRef);
  };

  return { burst, burstRef };
};

export default useSoundAndAnimation;
