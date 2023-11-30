import React, { useRef } from "react";
import * as Tone from "tone";

const ToneJSButton = () => {
  const player = new Tone.Player(
    "https://tonejs.github.io/audio/berklee/gong_1.mp3"
  ).toDestination();

  const handleButtonClick = async () => {
    try {
      console.log("Before starting audio context");

      // Start the audio context
      await Tone.start();

      console.log("Audio context started");

      // Make sure the player is loaded and ready to play
      if (player.loaded) {
        // Trigger playback
        player.start();
      }
    } catch (error) {
      console.error("Error starting audio context:", error);
    }
  };

  return <button onClick={handleButtonClick}>Play Gong</button>;
};

export default ToneJSButton;
