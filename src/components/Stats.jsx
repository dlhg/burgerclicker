import React from "react";

export default function Stats(props) {
  return (
    <>
      <div>Total burgers produced: {props.totalBurgersProduced}</div>
      <div>Burgers from clicking: {props.burgersMadeFromClicking}</div>
      <div>Burgers from automation: {props.burgersMadeFromAutomation}</div>
      <div>Burgers per click: {props.burgersPerClick}</div>
    </>
  );
}
