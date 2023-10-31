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

  function handleWin() {
    setOutcome("you won!");
    props.setBurgerCount((prev) => prev + 1);
    // delay before changing the main area
    setTimeout(() => {
      props.setMainArea("buildings");
    }, 2000);
  }

  function handleLose() {
    setOutcome("you lost!");
    props.setBurgerCount((prev) => prev - 1);
    //  delay before changing the main area
    setTimeout(() => {
      props.setMainArea("buildings");
    }, 2000);
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
          <button onClick={() => handleWin()}>win</button>
          <button onClick={() => handleLose()}>lose</button>
          <button onClick={() => percentChanceToWin(50)}>50/50 chance</button>
          <button onClick={() => props.setMainArea("buildings")}>
            quit game
          </button>
        </>
      )}
    </>
  );
}
