import React from "react";
import Quips from "./Quips";
// in cookie clicker, you can also revert back to buildings view by pressing on prev selection again - add this later

export default function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="navbar--left">
          <button onClick={() => props.setMainArea("options")}>options</button>
          <button onClick={() => props.setMainArea("stats")}>stats</button>
          <button onClick={() => props.setMainArea("info")}>info</button>
        </div>
        <div className="navbar--center">
          <Quips />
        </div>
        <div className="navbar--right">
          <button onClick={() => props.setMainArea("legacy")}>legacy</button>
          <button onClick={() => props.setMainArea("buildings")}>
            buildings
          </button>
          <button onClick={() => props.setMainArea("testconsole")}>
            console
          </button>
        </div>
      </div>
    </>
  );
}
