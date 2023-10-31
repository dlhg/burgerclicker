/*
- when X condition is met, use setMainArea to put game in the foreground of the game section
    - if player is in another section (like stats/info), they should not see the game

- game stays onscreen until player either wins, loses, or forfeit/quit

- first test of this functionality should be:
    - a screen with a unique bg color or image
    - to unlock, have 3 totalBurgersProduced
    - three buttons: win, lose, quit
    - write handle functions for each of these outcomes
        - function should use setMainArea to revert to default game view (set to buildings)
        - win=Bcount++, lose=Bcount--, quit has no effect to Bcount
*/

/*
possible game ideas:

- rock paper scissors (already have code for it)
- recreate randomly generated burger layer by layer in X amount of time (time given scales down and rewards scale up)
- burger order memory game
- timing/assembly based game like overcooked
- burger town 2d/isometric sim city lite



*/

import React, { useState } from "react";

export default function MinigameTemplate(props) {
  const [hideMinigame, setHideMiniGame] = useState(false);
  const [outcome, setOutcome] = useState("game in progress");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  function handleWin() {
    props.setBurgerCount((prev) => prev + 1);
    setButtonsDisabled(true); // Disable buttons
    let countdown = 3; // Initial countdown value

    setOutcome(`you won! going back to buildings area in ${countdown} seconds`);

    const countdownInterval = setInterval(() => {
      countdown -= 1;

      if (countdown < 0) {
        clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
        props.setMainArea("buildings");
        setButtonsDisabled(false); // Enable buttons after the timeout
      } else {
        setOutcome(
          `you won! going back to buildings area in ${countdown} seconds`
        );
      }
    }, 1000); // Update the countdown every second
  }
  function handleLose() {
    props.setBurgerCount((prev) => prev - 1);
    setButtonsDisabled(true); // Disable buttons
    let countdown = 3; // Initial countdown value

    setOutcome(`you lost! back to buildings area in ${countdown} seconds`);

    const countdownInterval = setInterval(() => {
      countdown -= 1;

      if (countdown < 0) {
        clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
        props.setMainArea("buildings");
        setButtonsDisabled(false); // Enable buttons after the timeout
      } else {
        setOutcome(`you lost! back to buildings area in ${countdown} seconds`);
      }
    }, 1000); // Update the countdown every second
  }

  function percentChanceToWin(percentage) {
    const random = Math.floor(Math.random() * 100);
    if (percentage >= random) {
      handleWin();
    } else {
      handleLose();
    }
  }

  return (
    <>
      {props.showMinigameCondition && !hideMinigame && (
        <>
          <h1>outcome : {outcome}</h1>
          <button onClick={() => handleWin()} disabled={buttonsDisabled}>
            win
          </button>
          <button onClick={() => handleLose()} disabled={buttonsDisabled}>
            lose
          </button>
          <button
            onClick={() => percentChanceToWin(50)}
            disabled={buttonsDisabled}
          >
            50/50 chance
          </button>
          <button onClick={() => props.setMainArea("buildings")}>
            quit game
          </button>
        </>
      )}
    </>
  );
}
