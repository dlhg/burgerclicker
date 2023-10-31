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
