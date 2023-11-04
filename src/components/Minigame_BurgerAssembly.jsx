/*
note about visual assets:
burger layer assets except for bacon, peppers, pickles and condiments taken from https://www.moaw.art/post/for-the-burger-looper
replace these later on, or get permission if releasing this game
bacon from https://webstockreview.net/pict/getfirst
pickles is heavily modified onion from first source
rushing employee in How to play section is AI gen
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
    - increment reward by some amount
    - give the player more time
    - setBurgerOrder to blank array
    - player is given whatever reward they have accumulated via setBurgerCount
    - set ticker text based on how fast the player assembled the burger
    - start a new round
  */

import React, { useState, useEffect } from "react";

//pics
import rushworkerpic from "../assets/images/minigames/assembly/rushworker.png";

//ingredient pics
import bottombunpic from "../assets/images/minigames/assembly/bottombun.png";
import cookedpattypic from "../assets/images/minigames/assembly/patty.png";
import ketchuppic from "../assets/images/minigames/assembly/ketchup.png";
import mustardpic from "../assets/images/minigames/assembly/mustard.png";
import lettucepic from "../assets/images/minigames/assembly/lettuce.png";
import mayopic from "../assets/images/minigames/assembly/mayo.png";
import meltycheesepic from "../assets/images/minigames/assembly/cheese.png";
import onionpic from "../assets/images/minigames/assembly/onion.png";
import picklespic from "../assets/images/minigames/assembly/pickles.png";
import tomatopic from "../assets/images/minigames/assembly/tomato.png";
import baconpic from "../assets/images/minigames/assembly/bacon.png";
import topbunpic from "../assets/images/minigames/assembly/topbun.png";

import Tickets from "./Minigames/Tickets";

export default function MinigameTemplate(props) {
  const [hideMinigame, setHideMiniGame] = useState(false);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [burgerOrder, setBurgerOrder] = useState([]);
  const [playerBurger, setPlayerBurger] = useState([]);

  const [reward, setReward] = useState(10);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [tickerText, setTickerText] = useState("The first order rolls in...");
  const [prevTickerText, setPrevTickerText] = useState("");
  const [gameDuration, setGameDuration] = useState(0);
  const [gameDurationWhenBurgerStarted, setGameDurationWhenBurgerStarted] =
    useState(0);
  const [burgerCreationTimes, setBurgerCreationTimes] = useState([]);

  const [toppings, setToppings] = useState([
    "lettuce",
    "patty",
    "cheese",
    "pickles",
    "tomato",
    "ketchup",
    "mayo",
    "bacon",
    "mustard",
    "onion",
  ]);

  // 7s or less is fast, 14s or more is slow
  const fastTime = 7;
  const slowTime = 14;

  /*
now that we're capturing burger creation time, we can:
  - create an array tracking each burger creation time (done, state variable burgerCreationTimes)
  - give special rewards and sfx, animations etc for a streak of fast burgers (similar to quake - double kill, multi kill, mega kill, ultra kill, monster kill etc)
  - display this info to the player somehow

*/
  const finishedBurgerFast = [
    "Wow that was fast! On to the next burger...",
    "Lightning quick! Another order coming in...",
    "Burger delivered in record time! Ready for the next one...",
    "Speedy service! More burgers to conquer...",
    "Fast and flawless! What's the next burger challenge?",
  ];

  const finishedBurgerNormal = [
    "Nice work! On to the next order...",
    "The customer loved it! Time for the next order...",
    "Good job! Next order coming up...",
    "Excellent! Another order coming in...",
  ];

  const finishedBurgerSlow = [
    "Hurry up! Another order coming in...",
    "Pick up the pace! Another order coming in...",
    "Stay sharp! New order coming in...",
    "Time is of the essence! Another order coming up...",
  ];

  useEffect(() => {
    let timer;
    if (timeRemaining === 0) {
      handleLose();
    }

    if (gameStarted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
        setGameDuration((prev) => prev + 1);
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
    setGameDurationWhenBurgerStarted(gameDuration);
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

      //calculate time to complete burger and add it to a list of burger creation times
      const timeToCompleteBurger = gameDuration - gameDurationWhenBurgerStarted;

      setBurgerCreationTimes((prevTimes) => [
        ...prevTimes,
        timeToCompleteBurger,
      ]);
      // determine ticker text bases on how fast it was assembled:

      // if the player was slow to make the burger
      if (timeToCompleteBurger >= slowTime) {
        let randomIndex = Math.floor(Math.random() * finishedBurgerSlow.length)
        let newText = finishedBurgerSlow[randomIndex]

        if (newText !== prevTickerText) {
          setTickerText(newText)
          setPrevTickerText(newText)
        }
        if (newText === prevTickerText) {
          // if we land on the same ticker text as last time, pick another element and setTickerText to that
          // check if an element exists at randomIndex - 1. If yes, use that. If no, use element at randomIndex + 1.
          finishedBurgerSlow[randomIndex - 1] !== undefined ? newText = finishedBurgerSlow[randomIndex - 1] : newText = finishedBurgerSlow[randomIndex + 1]
          setTickerText(newText)
          setPrevTickerText(newText)
        }
      }


      // if the player was neither slow nor fast (normal time)
      if (timeToCompleteBurger < slowTime && timeToCompleteBurger > fastTime) {
        let randomIndex = Math.floor(Math.random() * finishedBurgerNormal.length)
        let newText = finishedBurgerNormal[randomIndex]

        if (newText !== prevTickerText) {
          setTickerText(newText)
          setPrevTickerText(newText)
        }
        if (newText === prevTickerText) {
          // if we land on the same ticker text as last time, pick another element and setTickerText to that
          // check if an element exists at randomIndex - 1. If yes, use that. If no, use element at randomIndex + 1.
          finishedBurgerNormal[randomIndex - 1] !== undefined ? newText = finishedBurgerNormal[randomIndex - 1] : newText = finishedBurgerNormal[randomIndex + 1]
          setTickerText(newText)
          setPrevTickerText(newText)
        }
      }

      // if the player was fast 
      if (timeToCompleteBurger <= fastTime) {
        let randomIndex = Math.floor(Math.random() * finishedBurgerFast.length)
        let newText = finishedBurgerFast[randomIndex]

        if (newText !== prevTickerText) {
          setTickerText(newText)
          setPrevTickerText(newText)
        }
        if (newText === prevTickerText) {
          // if we land on the same ticker text as last time, pick another element and setTickerText to that
          // check if an element exists at randomIndex - 1. If yes, use that. If no, use element at randomIndex + 1.
          finishedBurgerFast[randomIndex - 1] !== undefined ? newText = finishedBurgerFast[randomIndex - 1] : newText = finishedBurgerFast[randomIndex + 1]
          setTickerText(newText)
          setPrevTickerText(newText)
        }
      }

      //increment Correct Streak and reward
      setCorrectStreak((prev) => prev + 1);
      setReward((prev) => Math.floor(prev * 1.5));
      //gain time for winning - model outcomes at https://codepen.io/dlg89/pen/GRzjMap?editors=1112
      setTimeRemaining(
        (current) => current + Math.floor(Math.max(4, 10 - correctStreak * 0.2))
      );

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
              <img
                src={rushworkerpic}
                style={{ float: "right", width: "50%" }}
                alt="Description of the image"
              />
              <div style={{ fontSize: "1.5rem" }}>
                <ul>
                  <li>assemble the burger to match the order</li>
                  <li>
                    serve the burger when done, or start over if you made a
                    mistake - but watch out, there is a penalty for starting
                    over! (10% loss to current reward level)
                  </li>
                  <li>
                    if your burger matches, your reward increases and you earn
                    bonus time (see handleSend function for logic)
                  </li>
                  <li>
                    bonus time gradually decreases (see handleSend for logic)
                  </li>
                  <li>if the timer runs out, it's game over!</li>

                  <li>
                    burgers always begin with a bottom bun and patty, and always
                    end with a top bun
                  </li>
                  <li>
                    focus on the ingredients in the middle in order to work
                    efficiently
                  </li>
                  <li>you are paid your reward when the game ends</li>
                  <li>
                    in the future, i will add an option to permanently skip this
                    section
                  </li>
                </ul>
                <button
                  onClick={startGame}
                  style={{ width: "100%", fontSize: "5rem" }}
                >
                  start game
                </button>
              </div>
            </div>
          )}
          {gameStarted && (
            <div className="assembly--wrapper">
              {/* <div className="assembly--navbar"> </div> */}
              <button
                id="quit--assembly--button"
                onClick={() => props.setMainArea("buildings")}
              >
                quit minigame
              </button>

              {/* <Tickets /> */}
              <div className="assembly--tickerText">
                <h2>{tickerText}</h2>
              </div>
              <div className="time--remaining">
                <h2
                  style={{
                    color: timeRemaining <= 5 ? "red" : "lightgreen",
                    animation:
                      timeRemaining <= 5 && timeRemaining !== 0
                        ? "wobble 1s infinite"
                        : "none",
                  }}
                >
                  Time: {timeRemaining}s
                </h2>
              </div>
              <div className="orders--container">
                <div className="customer--order">
                  customer's order:{" "}
                  {burgerOrder.map((layer) => (
                    <div>{layer}</div>
                  ))}
                </div>
                <div className="your--burger">
                  <div className="your--burger--text">
                    your burger:{" "}
                    {playerBurger.map((layer) => (
                      <div>{layer}</div>
                    ))}
                  </div>
                  <div className="your--burger--image">
                    <br />
                    <br />
                    {playerBurger.map((layer, index) => {
                      const picname =
                        "/src/assets/images/minigames/assembly/" +
                        layer +
                        ".png";
                      console.log(picname);
                      return (
                        <div key={Math.random() * 100000000000}>
                          <img
                            src={picname}
                            style={{ bottom: `calc(2rem + 0.5rem * ${index})` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="ingredient--buttons">
                <button onClick={() => handleStartOver()}>restart</button>
                <button
                  onClick={() =>
                    setPlayerBurger([...playerBurger, "bottombun"])
                  }
                >
                  bottom bun
                  <br />
                  <img src={bottombunpic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "patty"])}
                >
                  patty
                  <br />
                  <img src={cookedpattypic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "lettuce"])}
                >
                  lettuce
                  <br />
                  <img src={lettucepic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "tomato"])}
                >
                  tomato
                  <br />
                  <img src={tomatopic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "cheese"])}
                >
                  cheese
                  <br />
                  <img src={meltycheesepic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "pickles"])}
                >
                  pickles
                  <br />
                  <img src={picklespic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "bacon"])}
                >
                  bacon
                  <br />
                  <img src={baconpic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "onion"])}
                >
                  onion
                  <br />
                  <img src={onionpic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "mayo"])}
                >
                  mayo
                  <br />
                  <img src={mayopic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "mustard"])}
                >
                  mustard
                  <br />
                  <img src={mustardpic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "ketchup"])}
                >
                  ketchup
                  <br />
                  <img src={ketchuppic}></img>
                </button>
                <button
                  onClick={() => setPlayerBurger([...playerBurger, "topbun"])}
                >
                  top bun
                  <br />
                  <img src={topbunpic}></img>
                </button>
                <button onClick={() => handleSend()}>serve</button>
              </div>
              <div className="assembly--stats">
                <h2>reward: {reward}</h2>
                burgers served: {correctStreak}
                <br />
                assembly times: {burgerCreationTimes}
                <br />
                <h2>cheat/test console</h2>
                <button onClick={() => setPlayerBurger(burgerOrder)}>
                  clone order
                </button>
                <button onClick={() => handleSend()}>serve</button>
                <button
                  onClick={() => setTimeRemaining((prev) => prev + 10000)}
                >
                  +10000s to clock
                </button>
                <button onClick={() => setTimeRemaining(5)}>reduce clock to 5s left</button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
