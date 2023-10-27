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
        <div className="upgrade--grid">
          {/*this should be mapping over a list of player upgrades*/}
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
          <div>test upgrade</div>
        </div>
      </section>
      <br />
      <section>
        <div> Achievements unlocked:</div>
        <div className="achievement--grid">
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
          <div>test achievement</div>
        </div>
      </section>
    </>
  );
}
