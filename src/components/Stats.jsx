import React from "react";

export default function Stats(props) {
  return (
    <>
      <div>Total burgers produced: {props.totalBurgersProduced}</div>
      <div>Burgers from clicking: {props.burgersMadeFromClicking}</div>
      <div>
        Burgers from automation: {props.burgersMadeFromAutomation} (this stat
        currently bugged and showing 2x its true value)
      </div>
      <div>Burgers per click: {props.burgersPerClick}</div>
    </>
  );
}
