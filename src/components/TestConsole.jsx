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
  return (
    <>
      <h1>test console</h1>
      <TestConsoleButton
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
      />
    </>
  );
}
