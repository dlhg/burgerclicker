/*
  gameplay loop:
  - once the player presses start game, a random burger is generated
  - timer starts (30s minus correctStreak)
  - player assembles their burger
  // loss handling
  - if timer expires and areBurgersEqual is false, run handleLose
  - if player presses send burger, and then areBurgersEqual is false, run handleLose
  - in both cases, player is given whatever reward they have accumulated via setBurgerCount
  // win handling
  - if player presses send burger, and then areBurgersEqual is true:
    - increment correctStreak by 1
    - increment reward by 1
    - setBurgerOrder to blank array
    - player is given whatever reward they have accumulated via setBurgerCount
    - setOutcome to "you won! new order coming in 3 seconds"
    - start a new round
  */

import React, { useState, useEffect } from "react";

export default function MinigameTemplate(props) {
  const [hideMinigame, setHideMiniGame] = useState(false);
  const [outcome, setOutcome] = useState("game in progress");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [burgerOrder, setBurgerOrder] = useState([]);
  const [playerBurger, setPlayerBurger] = useState([]);
  const [areBurgersEqual, setAreBurgersEqual] = useState("");
  const [reward, setReward] = useState(0);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30 - correctStreak);
  const [gameStarted, setGameStarted] = useState(false);

  const [toppings, setToppings] = useState([
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
  ]);

  useEffect(() => {
    let timer;
    if (timeRemaining === 0) {
      handleLose();
    }

    if (gameStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [gameStarted, timeRemaining, areBurgersEqual]);

  function startGame() {
    console.log(`burger assembly game startGame fired`);
    setGameStarted(true);
    generateRandomBurger();
    setOutcome("game in progress");
    setButtonsDisabled(false);
    setCorrectStreak(0);
    setReward(0);
    setTimeRemaining(30 - correctStreak);
  }

  function handleLose() {
    setButtonsDisabled(true); // Disable buttons
    let countdown = 3; // Initial countdown value
    props.setBurgerCount((prev) => prev + reward);
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

  function generateRandomBurger() {
    const getRandomTopping = () =>
      toppings[Math.floor(Math.random() * toppings.length)];

    const burgArr = ["bottombun", "patty"];
    for (let i = 0; i < 3; i++) {
      const randomTopping = getRandomTopping();
      burgArr.push(randomTopping);
    }
    burgArr.push("topbun");
    console.log(burgArr);
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
          {!gameStarted && (
            <div>
              <button onClick={startGame}>start game</button>
              <div>
                How to play:
                <ul>
                  <li>assemble the burger to match the order</li>
                  <li>
                    send when complete, or start over if you made a mistake
                  </li>
                  <li>if the timer runs out, you lose!</li>
                </ul>
              </div>
            </div>
          )}
          {gameStarted && (
            <div>
              <h1>burger assembly game</h1>

              <div>
                random burger:{" "}
                {burgerOrder.map((layer) => (
                  <div>{layer}</div>
                ))}
              </div>
              <br />
              <div>
                <button
                  onClick={() =>
                    setPlayerBurger([...playerBurger, "bottombun"])
                  }
                >
                  bottom bun
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "patty"])}
                >
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
                  onClick={() =>
                    setPlayerBurger([...playerBurger, "hotpeppers"])
                  }
                >
                  hot peppers
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "bacon"])}
                >
                  bacon
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "onions"])}
                >
                  onions
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "mayo"])}
                >
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
                <button
                  onClick={() =>
                    burgerEqualityCheck()
                      ? setAreBurgersEqual(true)
                      : setAreBurgersEqual(false)
                  }
                >
                  send burger
                </button>
                <button onClick={() => setPlayerBurger(burgerOrder)}>
                  clone order (cheat)
                </button>
                <button onClick={() => setPlayerBurger([])}>start over</button>
                <button onClick={() => props.setMainArea("buildings")}>
                  quit game
                </button>
              </div>
              <br />
              <div>did the burgers match? {areBurgersEqual.toString()}</div>
              <div>current reward: {reward}</div>
              <div>time remaining: {timeRemaining}s</div>
              <div>game outcome: {outcome}</div>
            </div>
          )}
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
        */
}

// function handleWin() {
//     props.setBurgerCount((prev) => prev + 1);
//     setButtonsDisabled(true); // Disable buttons
//     let countdown = 3; // Initial countdown value

//     setOutcome(`you won! going back to buildings area in ${countdown} seconds`);

//     const countdownInterval = setInterval(() => {
//       countdown -= 1;

//       if (countdown < 0) {
//         clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
//         props.setMainArea("buildings");
//         setButtonsDisabled(false); // Enable buttons after the timeout
//       } else {
//         setOutcome(
//           `you won! going back to buildings area in ${countdown} seconds`
//         );
//       }
//     }, 1000); // Update the countdown every second
//   }
//   function handleLose() {
//     props.setBurgerCount((prev) => prev - 1);
//     setButtonsDisabled(true); // Disable buttons
//     let countdown = 3; // Initial countdown value

//     setOutcome(`you lost! back to buildings area in ${countdown} seconds`);

//     const countdownInterval = setInterval(() => {
//       countdown -= 1;

//       if (countdown < 0) {
//         clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
//         props.setMainArea("buildings");
//         setButtonsDisabled(false); // Enable buttons after the timeout
//       } else {
//         setOutcome(`you lost! back to buildings area in ${countdown} seconds`);
//       }
//     }, 1000); // Update the countdown every second
//   }
//   function percentChanceToWin(percentage) {
//     const random = Math.floor(Math.random() * 100);
//     if (percentage >= random) {
//       handleWin();
//     } else {
//       handleLose();
//     }
//   }
//   function percentChanceForOutcome(percentage, outcomeA, outcomeB) {
//     const random = Math.floor(Math.random() * 100);
//     if (percentage >= random) {
//       outcomeA();
//     } else {
//       outcomeB();
//     }
//   }
