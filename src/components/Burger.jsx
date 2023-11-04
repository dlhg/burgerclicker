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
        (prevCount) => prevCount + (props.burgersPerSecond * props.tempBPSBoostMultiplier / 10)
      );
    }, 100);

    return () => clearInterval(interval);
  }, [props.burgersPerSecond, props.tempBPSBoostMultiplier]);

  function handleBurgerClick() {
    props.setBurgerCount((prevCount) => prevCount + (props.burgersPerClick * props.tempBPCBoostMultiplier));
    props.setBurgersMadeFromClicking(
      (prevCount) => prevCount + (props.burgersPerClick * props.tempBPCBoostMultiplier)
    );
    //play();
  }

  return (
    <div>
      <section>Burgers : {formatNumber(props.displayedBurgerCount)}</section>
      {/* added placeholder conditional styles to show player if their BPS or BPC is currently boosted, update these to something better later */}
      <section style={{ color: props.tempBPSBoostMultiplier > 1 ? 'gold' : 'lightgreen' }}>
        Per Second : {formatNumber(props.burgersPerSecond * props.tempBPSBoostMultiplier)}
        <br />
        BPS base : {formatNumber(props.burgersPerSecond)}
        <br />
        BPS multiplier : {props.tempBPSBoostMultiplier}
      </section>

      <section style={{ color: props.tempBPCBoostMultiplier > 1 ? 'gold' : 'lightgreen' }}>
        Per Click : {formatNumber(props.burgersPerClick * props.tempBPCBoostMultiplier)}
        <br />
        BPC Base : {formatNumber(props.burgersPerClick)}
        <br />
        BPC Multiplier : {props.tempBPCBoostMultiplier}
      </section>


      {/* how should add/remove boost work?
      boost added at the start of the interval, and then removed at the end of the interval
      boost should not be reset back to default value of 1, as that would break multiple stacked boosts
      ex. player starts a 100% BPS boost lasting 10 seconds, and a 200% boost lasting 30 seconds at the same time
      BPS = base (1) + 1 (100%) + 2 (200%) = 4, or 400% total (base value of 100% plus 300% boost)
      after 10 seconds, BPS decremented by 1
      after 30 seconds, BPS decremented by 2

      boost multiplier for both BPS and BPC should be visible to the player
      
      */}


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
