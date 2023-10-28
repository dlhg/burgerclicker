import React from "react";
import { formatNumber } from "../utils";

import questionmarkpic from "../assets/images/questionbox_small.jpeg";

// own X number of X building
// totalBurgersProduced exceeds X threshold
// burgersPerSecond exceeds X threshold
// burgersMadeFromClicking exceeds X threshold
// burgersMadeFromAutomation exceeds X threshold

/*
upgrade properties:

- name
- id
- icon
- setter (setter function related to what stat the upgrade improves)
- argument (argument for setter function)
- unlockThreshold (how many of X needed to unlock)
- unlockDependency (ie. )

const allUpgrades = [
  {
    totalBurgersProduced:{

    }
  }
];


*/

export default function Stats(props) {
  return (
    <>
      <section>
        <div>Total burgers produced: {props.totalBurgersProduced}</div>
        <div>
          Burgers from clicking: {formatNumber(props.burgersMadeFromClicking)}
        </div>
        <div>
          Burgers from automation:{" "}
          {formatNumber(props.burgersMadeFromAutomation)}
        </div>
        <div>Burgers per click: {formatNumber(props.burgersPerClick)}</div>
      </section>
      <br />
      <section>
        <div>Upgrades unlocked:</div>
        <div className="upgrade--grid">
          {/*this should be mapping over a list of owned upgrades*/}
          {/*if the player doesn't own the upgrade yet, represent it with a question mark pic*/}
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
        </div>
      </section>
      <section>
        <div> Achievements unlocked:</div>
        <div className="achievement--grid">
          {/*this should be mapping over a list of achievements*/}
          {/*if the player have the achievement yet, represent it with a question mark pic*/}
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
          <div>
            <img src={questionmarkpic}></img>
          </div>
        </div>
      </section>
    </>
  );
}
