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

  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [burgerOrder, setBurgerOrder] = useState([]);
  const [playerBurger, setPlayerBurger] = useState([]);

  const [reward, setReward] = useState(10);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30 - correctStreak);
  const [gameStarted, setGameStarted] = useState(false);
  const [tickerText, setTickerText] = useState("The first order rolls in...");

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
  }, [gameStarted, timeRemaining]);

  function startGame() {
    setGameStarted(true);
    generateRandomBurger();

    setButtonsDisabled(false);
    setCorrectStreak(0);
  }

  function handleLose() {
    setButtonsDisabled(true); // Disable buttons
    let countdown = 3; // Initial countdown value
    props.setBurgerCount((prev) => prev + reward);
    setTickerText(
      `game over! you won ${reward} burgers, going back to buildings area in ${countdown} seconds`
    );

    const countdownInterval = setInterval(() => {
      countdown -= 1;

      if (countdown < 0) {
        clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
        props.setMainArea("buildings");
        setButtonsDisabled(false); // Enable buttons after the timeout
      } else {
        setTickerText(
          `game over! you won ${reward} burgers, going back to buildings area in ${countdown} seconds`
        );
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

  function handleSend() {
    // if burger doesn't match
    if (burgerEqualityCheck() === false) {
      handleLose();
    } else {
      //if burger matches
      setCorrectStreak((prev) => prev + 1);
      setReward((prev) => Math.floor(prev * 1.5));
      //gain time for winning
      setTimeRemaining(
        (current) => current + Math.floor(Math.max(5, 20 - correctStreak * 0.5))
      );
      setTickerText("Great job! Another order comes in...");
      setPlayerBurger([]);
      generateRandomBurger();
    }
  }

  function handleStartOver() {
    let penaltyMultiplier = 0.9;
    setPlayerBurger([]);
    setTickerText(
      `whoops! starting that burger over, reward went from ${reward} to ${Math.max(
        1,
        Math.floor(reward * penaltyMultiplier)
      )}`
    );
    setReward((prev) => Math.max(1, Math.floor(prev * penaltyMultiplier)));
  }
  return (
    <>
      <div className="burger--assembly--wrapper"></div>
      {props.showMinigameCondition && !hideMinigame && (
        <>
          {!gameStarted && (
            <div>
              <div>
                How to play:
                <ul>
                  <li>assemble the burger to match the order</li>
                  <li>
                    send when complete, or start over if you made a mistake -
                    but watch out, there is a penalty for starting over! (10%
                    loss to current reward level)
                  </li>
                  <li>
                    if your burger matches, your reward increases and you earn
                    bonus time (see handleSend function for logic)
                  </li>
                  <li>if the timer runs out, it's game over!</li>
                  <li>you are paid your reward when the game ends</li>
                  <li>
                    in the future, i will add an option to permanently skip this
                    section
                  </li>
                </ul>
                <button onClick={startGame}>start game</button>
              </div>
            </div>
          )}
          {gameStarted && (
            <div className="assembly--wrapper">
              <h1>burger assembly challenge</h1>
              <h2>time remaining: {timeRemaining}</h2>
              <h2>current reward: {reward}</h2>
              <h2>{tickerText}</h2>

              <div>
                customer's order:{" "}
                {burgerOrder.map((layer) => (
                  <div>{layer}</div>
                ))}
              </div>
              <br />
              <div>
                create burger:
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
              <div>
                your burger:{" "}
                {playerBurger.map((layer) => (
                  <div>{layer}</div>
                ))}
              </div>
              <div>
                <br />
                <button onClick={() => handleSend()}>send burger</button>
                <button onClick={() => handleStartOver()}>start over</button>
                <br />
                <button onClick={() => setPlayerBurger(burgerOrder)}>
                  clone order (cheat)
                </button>
                <button
                  onClick={() => setTimeRemaining((prev) => prev + 10000)}
                >
                  +10000s to timer (cheat)
                </button>
                <br />
                <button onClick={() => props.setMainArea("buildings")}>
                  quit game
                </button>
              </div>
              <br />

              <div>current reward: {reward}</div>
              <div>correct streak: {correctStreak}</div>
              <div>time remaining: {timeRemaining}s</div>
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
