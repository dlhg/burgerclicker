import React from "react";

export default function Stats(props) {
  return (
    <>
      <section>
        <div>Total burgers produced: {props.totalBurgersProduced}</div>
        <div>Burgers from clicking: {props.burgersMadeFromClicking}</div>
        <div>Burgers from automation: {props.burgersMadeFromAutomation}</div>
        <div>Burgers per click: {props.burgersPerClick}</div>
      </section>
      <br />
      <section>
        <div>Upgrades unlocked:</div>
        <div>Upgrade grid goes here</div>
      </section>
      <br />
      <section>
        <div> Achievements unlocked:</div>
        <div> Achievement grid goes here</div>
      </section>
    </>
  );
}
