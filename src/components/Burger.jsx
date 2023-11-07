import React, { useEffect, useState } from "react";
import { formatNumber } from "../utils";

export default function Burger(props) {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [floatingNumbers, setFloatingNumbers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      props.setBurgersMadeFromAutomation(
        (prevCount) =>
          prevCount +
          (props.burgersPerSecond * props.tempBPSBoostMultiplier) / 10
      );
    }, 100);

    return () => clearInterval(interval);
  }, [props.burgersPerSecond, props.tempBPSBoostMultiplier]);

  function handleBurgerClick(e) {
    setClickPosition({ x: e.clientX, y: e.clientY });

    const key = Date.now().toString();

    setFloatingNumbers((prevNumbers) => [
      ...prevNumbers,
      {
        key,
        value: formatNumber(
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

    // Set a timeout to remove the added element after 1.5 seconds
    setTimeout(() => {
      setFloatingNumbers((prevNumbers) =>
        prevNumbers.filter((number) => number.key !== key)
      );
    }, 1500);
  }

  return (
    <div>
      <section>Burgers : {formatNumber(props.displayedBurgerCount)}</section>
      {/* added placeholder conditional styles to show player if their BPS or BPC is currently boosted, update these to something better later */}
      <section
        className={props.tempBPSBoostMultiplier > 1 ? "rainbow--text" : ""}
      >
        Per Second :{" "}
        {formatNumber(props.burgersPerSecond * props.tempBPSBoostMultiplier)}
        {props.tempBPSBoostMultiplier > 1
          ? `  (${props.tempBPSBoostMultiplier}x multiplier)`
          : ""}
      </section>

      <section
        className={props.tempBPCBoostMultiplier > 1 ? "rainbow--text" : ""}
      >
        Per Click :{" "}
        {formatNumber(props.burgersPerClick * props.tempBPCBoostMultiplier)}
        {props.tempBPCBoostMultiplier > 1
          ? `  (${props.tempBPCBoostMultiplier}x multiplier)`
          : ""}
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
        {floatingNumbers.map((number) => (
          <div
            key={number.key}
            className="floating--number"
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
