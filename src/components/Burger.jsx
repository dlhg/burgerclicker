import React, { useEffect, useState } from "react";
import { formatNumber, formatNumberTruncated } from "../utils";

export default function Burger(props) {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [floatingNumbers, setFloatingNumbers] = useState([]);
  const [canPlayerClick, setCanPlayerClick] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      props.setBurgersMadeFromAutomation(
        (prevCount) =>
          prevCount +
          (props.totalBuildingBPS * props.tempBPSBoostMultiplier) / 10
      );
    }, 100);

    return () => clearInterval(interval);
  }, [props.totalBuildingBPS, props.tempBPSBoostMultiplier]);

  function handleBurgerClick(e) {

    if (canPlayerClick === false) {
      console.log('fast clicking detected!')
      return;
    }



    setClickPosition({ x: e.clientX, y: e.clientY });

    const key = Date.now().toString();

    setFloatingNumbers((prevNumbers) => [
      ...prevNumbers,
      {
        key,
        value: formatNumberTruncated(
          props.burgersPerClick * props.tempBPCBoostMultiplier
        ),
        x: e.clientX,
        y: e.clientY,
      },
    ]);

    props.setBurgerCount(
      (prevCount) =>
        prevCount + props.burgersPerClick * props.tempBPCBoostMultiplier
    );
    props.setBurgersMadeFromClicking(
      (prevCount) =>
        prevCount + props.burgersPerClick * props.tempBPCBoostMultiplier
    );

    // Set a timeout to remove the added element after 1.4 seconds, slightly shorter than anim length (if changing anim length later, this needs to be changed too)
    setTimeout(() => {
      setFloatingNumbers((prevNumbers) =>
        prevNumbers.filter((number) => number.key !== key)
      );
    }, 1400);

    // Make it so that player can only click the burger once every 100ms. This is somewhat of a bandaid fix for auto-clicker breaking the game.
    setCanPlayerClick(false);
    setTimeout(() => {
      setCanPlayerClick(true)
        ;
    }, 50);
  }

  return (
    <div>
      <section className={props.isBoostActive ? "rainbow--text--noanim" : ""}>
        Burgers : {formatNumber(props.displayedBurgerCount)}
      </section>
      {/* added placeholder conditional styles to show player if their BPS or BPC is currently boosted, update these to something better later */}
      <section
        className={props.tempBPSBoostMultiplier > 1 ? "rainbow--text" : ""}
      >
        Per Second :{" "}
        {formatNumber(props.totalBuildingBPS * props.tempBPSBoostMultiplier)}
        {props.tempBPSBoostMultiplier > 1
          ? `  (${props.tempBPSBoostMultiplier}x)`
          : ""}
      </section>

      <section
        className={props.tempBPCBoostMultiplier > 1 ? "rainbow--text" : ""}
      >
        Per Click :{" "}
        {formatNumber(props.burgersPerClick * props.tempBPCBoostMultiplier)}
        {props.tempBPCBoostMultiplier > 1
          ? `  (${props.tempBPCBoostMultiplier}x)`
          : ""}
      </section>

      <br />
      <br />

      <section className="clickable--burger">
        <img
          src={props.burgerpic}
          draggable="false"
          onClick={handleBurgerClick}
          alt="Burger"
          className="big--burger"
        />
      </section>
      <section>
        {floatingNumbers.map((number) => (
          <div
            key={number.key}
            className={
              props.isBoostActive
                ? "floating--number--boost--active"
                : "floating--number"
            }
            style={{ left: number.x, top: number.y }}
          >
            {number.value}
          </div>
        ))}
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}
