/*
  gameplay loop:
  - random burger is generated
  - timer starts (10s)
  - once timer is up, if player correctly assembled the burger, they continue to next round

  */

import React, { useState } from "react";

export default function MinigameTemplate(props) {
  const [hideMinigame, setHideMiniGame] = useState(false);
  const [outcome, setOutcome] = useState("game in progress");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [burgerOrder, setBurgerOrder] = useState([]);
  const [playerBurger, setPlayerBurger] = useState([]);
  const [areBurgersEqual, setAreBurgersEqual] = useState(false);

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
  function percentChanceForOutcome(percentage, outcomeA, outcomeB) {
    const random = Math.floor(Math.random() * 100);
    if (percentage >= random) {
      outcomeA();
    } else {
      outcomeB();
    }
  }
  function generateRandomBurger() {
    const random = Math.floor(Math.random() * 10);
    const random2 = Math.floor(Math.random() * 10);
    const random3 = Math.floor(Math.random() * 10);
    let burgArr = ["bottombun", "patty"];
    const toppings = [
      "lettuce",
      "patty",
      "cheese",
      "pickles",
      "hotpeppers",
      "ketchup",
      "mayo",
      "bacon",
      "mustard",
      "onions",
    ];
    const layer1 = toppings[random];
    const layer2 = toppings[random2];
    const layer3 = toppings[random3];
    burgArr.push(layer1, layer2, "topbun");
    setBurgerOrder(burgArr);
  }
  function burgerEqualityCheck() {
    if (playerBurger.length !== burgerOrder.length) {
      return false;
    }
    for (let i = 0; i < playerBurger.length; i++) {
      if (playerBurger[i] !== burgerOrder[i]) {
        return false;
      }
    }
    return true;
  }

  return (
    <>
      {props.showMinigameCondition && !hideMinigame && (
        <>
          <h1>burger assembly game</h1>
          <button onClick={() => generateRandomBurger()}>
            generate random burger order
          </button>
          <div>random burger: {burgerOrder}</div>
          <br />
          <div>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "bottombun"])}
            >
              bottom bun
            </button>
            <button onClick={() => setPlayerBurger([...playerBurger, "patty"])}>
              patty
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "lettuce"])}
            >
              lettuce
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "cheese"])}
            >
              cheese
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "pickles"])}
            >
              pickles
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "hotpeppers"])}
            >
              hot peppers
            </button>
            <button onClick={() => setPlayerBurger([...playerBurger, "bacon"])}>
              bacon
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "onions"])}
            >
              onions
            </button>
            <button onClick={() => setPlayerBurger([...playerBurger, "mayo"])}>
              mayo
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "mustard"])}
            >
              mustard
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "ketchup"])}
            >
              ketchup
            </button>
            <button
              onClick={() => setPlayerBurger([...playerBurger, "topbun"])}
            >
              top bun
            </button>
          </div>
          <br />
          <div>your burger: {playerBurger}</div>
          <div>
            <button onClick={() => setPlayerBurger([])}>start over</button>
            <button
              onClick={() =>
                burgerEqualityCheck()
                  ? setAreBurgersEqual(true)
                  : setAreBurgersEqual(false)
              }
            >
              send burger
            </button>
          </div>
          <br />
          <div>did the burgers match? {areBurgersEqual.toString()}</div>
        </>
      )}
    </>
  );
}

{
  /*
          <h1>template game</h1>
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
          </button> */
}
