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

import React, { useState } from "react";

export default function MinigameTemplate(props) {
  const [hideMinigame, setHideMiniGame] = useState(false);
  const [outcome, setOutcome] = useState("");

  function handleWin() {
    setOutcome("you won!");
    props.setBurgerCount((prev) => prev + 1);
    props.setMainArea("buildings");
  }

  function handleLose() {
    setOutcome("you lost!");
    props.setBurgerCount((prev) => prev - 1);
    props.setMainArea("buildings");
  }

  return (
    <>
      {props.showMinigameCondition && !hideMinigame && (
        <>
          <h1>outcome</h1>
          <button onClick={() => handleWin()}>win</button>
          <button onClick={() => handleLose()}>lose</button>

          <button onClick={() => props.setMainArea("buildings")}>
            quit game
          </button>
        </>
      )}
    </>
  );
}
