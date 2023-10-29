/*
add test console component

- should have "custom function" function:
    - user can choose setter function and argument, then call it
*/

import React, { useState } from "react";
import TestConsoleButton from "./TestConsoleButton";
import loopedvectorpic from "../assets/images/backgrounds/loopedvector.gif";

export default function TestConsole({
  setBurgersPerClick,
  setBurgersPerSecond,
  setCurrentQuipLevel,
  setBurgerCount,
  setTotalBurgersProducedUnformatted,
  setBurgersMadeFromClicking,
  setBurgersMadeFromAutomation,
  setPointerCount,
  setPointerBPS,
  setWorkerCount,
  setWorkerBPS,
  setGrillCount,
  setGrillBPS,
  setTruckCount,
  setTruckBPS,
  setBankCount,
  setBankBPS,
  setTempleCount,
  setTempleBPS,
  setLabCount,
  setLabBPS,
  setSpacecraftCount,
  setSpaceCraftBPS,
  setPortalCount,
  setPortalBPS,
}) {
  const [selectedFunction, setSelectedFunction] = useState("");
  const [argument, setArgument] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleFunctionChange = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleArgumentChange = (event) => {
    setArgument(event.target.value);
  };

  const handleExecute = () => {
    if (selectedFunction) {
      switch (selectedFunction) {
        case "setBurgersPerClick":
          setBurgersPerClick(Number(argument));
          break;
        case "setBurgersPerSecond":
          setBurgersPerSecond(Number(argument));
          break;
        case "setCurrentQuipLevel":
          setCurrentQuipLevel(Number(argument));
          break;
        case "setMainArea":
          setMainArea(Number(argument));
          break;
        case "setBurgerCount":
          setBurgerCount(Number(argument));
          break;
        case "setTotalBurgersProducedUnformatted":
          setTotalBurgersProducedUnformatted(Number(argument));
          break;
        case "setBurgersMadeFromClicking":
          setBurgersMadeFromClicking(Number(argument));
          break;
        case "setBurgersMadeFromAutomation":
          setBurgersMadeFromAutomation(Number(argument));
          break;
        case "setPointerCount":
          setPointerCount(Number(argument));
          break;
        case "setPointerBPS":
          setPointerBPS(Number(argument));
          break;
        case "setWorkerCount":
          setWorkerCount(Number(argument));
          break;
        case "setWorkerBPS":
          setWorkerBPS(Number(argument));
          break;
        case "setGrillCount":
          setGrillCount(Number(argument));
          break;
        case "setGrillBPS":
          setGrillBPS(Number(argument));
          break;
        case "setTruckCount":
          setTruckCount(Number(argument));
          break;
        case "setTruckBPS":
          setTruckBPS(Number(argument));
          break;
        case "setBankCount":
          setBankCount(Number(argument));
          break;
        case "setBankBPS":
          setBankBPS(Number(argument));
          break;
        case "setTempleCount":
          setTempleCount(Number(argument));
          break;
        case "setTempleBPS":
          setTempleBPS(Number(argument));
          break;
        case "setLabCount":
          setLabCount(Number(argument));
          break;
        case "setLabBPS":
          setLabBPS(Number(argument));
          break;
        case "setSpacecraftCount":
          setSpacecraftCount(Number(argument));
          break;
        case "setSpaceCraftBPS":
          setSpaceCraftBPS(Number(argument));
          break;
        case "setPortalCount":
          setPortalCount(Number(argument));
          break;
        case "setPortalBPS":
          setPortalBPS(Number(argument));
          break;
        default:
          console.error("Invalid function selected");
      }
    }
  };

  return (
    <>
      <div className="test--console">
        <div className="TC--left">
          {" "}
          <img src={loopedvectorpic}></img>
        </div>

        <div className="TC--center">
          <br />

          <div className="TC--func">
            <label>
              Setter:
              <select value={selectedFunction} onChange={handleFunctionChange}>
                <option value="">Select...</option>
                <option value="setBurgersPerClick">setBurgersPerClick</option>
                <option value="setBurgersPerSecond">setBurgersPerSecond</option>
                <option value="setCurrentQuipLevel">setCurrentQuipLevel</option>

                <option value="setBurgerCount">setBurgerCount</option>
                <option value="setTotalBurgersProducedUnformatted">
                  setTotalBurgersProducedUnformatted
                </option>
                <option value="setBurgersMadeFromClicking">
                  setBurgersMadeFromClicking
                </option>
                <option value="setBurgersMadeFromAutomation">
                  setBurgersMadeFromAutomation
                </option>
                <option value="setPointerCount">setPointerCount</option>
                <option value="setPointerBPS">setPointerBPS</option>
                <option value="setWorkerCount">setWorkerCount</option>
                <option value="setWorkerBPS">setWorkerBPS</option>
                <option value="setGrillCount">setGrillCount</option>
                <option value="setGrillBPS">setGrillBPS</option>
                <option value="setTruckCount">setTruckCount</option>
                <option value="setTruckBPS">setTruckBPS</option>
                <option value="setBankCount">setBankCount</option>
                <option value="setBankBPS">setBankBPS</option>
                <option value="setTempleCount">setTempleCount</option>
                <option value="setTempleBPS">setTempleBPS</option>
                <option value="setLabCount">setLabCount</option>
                <option value="setLabBPS">setLabBPS</option>
                <option value="setSpacecraftCount">setSpacecraftCount</option>
                <option value="setSpaceCraftBPS">setSpaceCraftBPS</option>
                <option value="setPortalCount">setPortalCount</option>
                <option value="setPortalBPS">setPortalBPS</option>
              </select>
            </label>
            <br />
            <label>
              Argument:
              <input
                type="text"
                value={argument}
                onChange={handleArgumentChange}
              />
            </label>
            <br />
            <br />
            <button onClick={handleExecute}>Execute</button>
            <br />
            <button onClick={() => setShowInfo((prev) => !prev)}>
              {showInfo ? "Hide Info" : "Show Info"}
            </button>
          </div>
          <br />
          {showInfo && (
            <section className="TC-setter-info">
              <ul>
                <li>BPS = burgers per second</li>
                <li>
                  when using setQuipLevel, Quip Level ranges from 0-7 (as the
                  player progresses, higher quip levels give new quips)
                </li>
                <li>
                  Quip Level is used as a proxy for game progress in the
                  FallingImages component, generating more falling burgers as
                  player progresses
                </li>
              </ul>
            </section>
          )}
        </div>
        <div className="TC--right">
          <img src={loopedvectorpic}></img>
        </div>
      </div>
    </>
  );
}