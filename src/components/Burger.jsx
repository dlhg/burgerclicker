import React, { useEffect, useState } from "react";
import { formatNumber } from "../utils";
//import useSound from "use-sound";
//import click1 from "../assets/sfx/click1.wav";
//import click2 from "../assets/sfx/click2.wav";
//import click3 from "../assets/sfx/click3.wav";
//import click4 from "../assets/sfx/click4.wav";
//import { getRandomIndex } from "../Utils";
//import { getRandomNumber } from "../Utils";
//const clicksounds = [click1, click2, click3, click4];

export default function Burger(props) {
  //const [play] = useSound(clicksounds[getRandomIndex(clicksounds)]);

  useEffect(() => {
    const interval = setInterval(() => {
      props.setBurgersMadeFromAutomation(
        (prevCount) => prevCount + props.burgersPerSecond / 10
      );
    }, 100);

    return () => clearInterval(interval);
  }, [props.burgersPerSecond]);

  function handleBurgerClick() {
    props.setBurgerCount((prevCount) => prevCount + props.burgersPerClick);
    props.setBurgersMadeFromClicking(
      (prevCount) => prevCount + props.burgersPerClick
    );
    //play();
  }

  return (
    <div>
      <section>Burgers: {formatNumber(props.displayedBurgerCount)}</section>

      <section>
        Burgers Per Second: {formatNumber(props.burgersPerSecond)}
      </section>

      <br />
      <br />

      <section>
        <img
          src={props.burgerpic}
          onClick={handleBurgerClick}
          alt="Burger"
          className="big--burger"
        />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}
