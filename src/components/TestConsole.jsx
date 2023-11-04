import React, { useState } from "react";
import TestConsoleButton from "./TestConsoleButton";
import loopedvectorpic from "../assets/images/backgrounds/loopedvector.gif";

export default function TestConsole({
  setBurgersPerClick,
  setBurgersPerSecond,
  setCurrentQuipLevel,
  setTempBPSBoostMultiplier,
  setTempBPCBoostMultiplier,
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

  // increase BPS multiplier by 100% for 5 seconds
  const increaseBPSMult_100_5s = () => {
    setTempBPSBoostMultiplier((prevMultiplier) => prevMultiplier + 1);

    // Set a timeout to decrease the multiplier after 5 seconds
    setTimeout(() => {
      setTempBPSBoostMultiplier((prevMultiplier) => prevMultiplier - 1);
    }, 5000);
  };

  // increase BPC multiplier by 100% for 5 seconds
  const increaseBPCMult_100_5s = () => {
    setTempBPCBoostMultiplier((prevMultiplier) => prevMultiplier + 1);

    // Set a timeout to decrease the multiplier after 5 seconds
    setTimeout(() => {
      setTempBPCBoostMultiplier((prevMultiplier) => prevMultiplier - 1);
    }, 5000);
  };


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

        case "setTempBPSBoostMultiplier":
          setTempBPSBoostMultiplier(Number(argument));
          break;
        case "setTempBPCBoostMultiplier":
          setTempBPCBoostMultiplier(Number(argument));
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
                <option value="setTempBPSBoostMultiplier">setTempBPSBoostMultiplier</option>
                <option value="setTempBPCBoostMultiplier">setTempBPCBoostMultiplier</option>
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
            <button onClick={() => increaseBPSMult_100_5s()}>boost BPS by 100% for 5 seconds</button>
            <button onClick={() => increaseBPCMult_100_5s()}>boost BPC by 100% for 5 seconds</button>


            {/* <button>boost BPC by 100% for 5 seconds</button>
            <button>boost BPS by 1000% for 10 seconds</button>
            <button>boost BPC by 1000% for 10 seconds</button> */}

            {/* 
      how should add/remove boost work?
      boost added at the start of the interval, and then removed at the end of the interval
      boost should not be reset back to default value of 1, as that would break multiple stacked boosts
      ex. player starts a 100% BPS boost lasting 10 seconds, and a 200% boost lasting 30 seconds at the same time
      BPS = base (1) + 1 (100%) + 2 (200%) = 4, or 400% total (base value of 100% plus 300% boost)
      after 10 seconds, BPS decremented by 1
      after 30 seconds, BPS decremented by 2

      boost multiplier for both BPS and BPC should be visible to the player

      props.setTempBPSBoostMultiplier
      props.setTempBPCBoostMultiplier
      
      */}


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
