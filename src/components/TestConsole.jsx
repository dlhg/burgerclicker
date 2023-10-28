/*
add test console component

- should have "custom function" function:
    - user can choose setter function and argument, then call it
*/

import React, { useState } from "react";
import TestConsoleButton from "./TestConsoleButton";

export default function TestConsole({
  setBurgersPerClick,
  setBurgersPerSecond,
}) {
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [argument, setArgument] = useState("");

  const handleFunctionChange = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleArgumentChange = (event) => {
    setArgument(event.target.value);
  };

  const handleExecute = () => {
    // Check if a function is selected
    if (selectedFunction) {
      // Dynamically call the selected function with the provided argument
      switch (selectedFunction) {
        case "setBurgersPerClick":
          setBurgersPerClick(Number(argument));
          break;
        case "setBurgersPerSecond":
          setBurgersPerSecond(Number(argument));
          break;
        // Add more cases for other setter functions if needed
        default:
          console.error("Invalid function selected");
      }
    }
  };

  return (
    <>
      <h1>Test Console</h1>
      <label>
        Select Setter Function:
        <select value={selectedFunction} onChange={handleFunctionChange}>
          <option value="">Select...</option>
          <option value="setBurgersPerClick">setBurgersPerClick</option>
          <option value="setBurgersPerSecond">setBurgersPerSecond</option>
          {/* Add more options for other setter functions if needed */}
        </select>
      </label>
      <br />
      <label>
        Argument:
        <input type="text" value={argument} onChange={handleArgumentChange} />
      </label>
      <br />
      <button onClick={handleExecute}>Execute</button>
    </>
  );
}

{
  /* <TestConsoleButton
        buttontext="set burgers/second to 0"
        functionarg={0}
        buttonfunc={setBurgersPerSecond}
      />
      <TestConsoleButton
        buttontext="+1 burger/second"
        functionarg={(prev) => prev + 1}
        buttonfunc={setBurgersPerSecond}
      />
      <TestConsoleButton
        buttontext="+100 burger/second"
        functionarg={(prev) => prev + 100}
        buttonfunc={setBurgersPerSecond}
      />
      <TestConsoleButton
        buttontext="+1000 burger/second"
        functionarg={(prev) => prev + 1000}
        buttonfunc={setBurgersPerSecond}
      />
      <TestConsoleButton
        buttontext="+10 million burger/second"
        functionarg={(prev) => prev + 10000000}
        buttonfunc={setBurgersPerSecond}
      />
      <TestConsoleButton
        buttontext="+1 burger per click"
        functionarg={(prev) => prev + 1}
        buttonfunc={setBurgersPerClick}
      />
      <TestConsoleButton
        buttontext="+1000 burger per click"
        functionarg={(prev) => prev + 1000}
        buttonfunc={setBurgersPerClick}
      />
      <TestConsoleButton
        buttontext="+10000 burger per click"
        functionarg={(prev) => prev + 10000}
        buttonfunc={setBurgersPerClick}
      />
      <TestConsoleButton
        buttontext="+1 billion burger per click"
        functionarg={(prev) => prev + 1000000000}
        buttonfunc={setBurgersPerClick}
      />
      <TestConsoleButton
        buttontext="borgir :)"
        functionarg={""}
        //buttonfunc={playBorgirSound}
      /> */
}
