/*
graph component:
    - BPS over time
    - total burgers produced over time
    - current burgers held


- create app level state variable called "snapshot" or something similar
    - run an interval to gather whatever data i want to graph every defined interval (30s?)
    - this snapshot function could probably eventually help with creating save files
*/
import React, { useState } from "react";

export default function Graph(props) {
  return (
    <>
      <div>graph component</div>
    </>
  );
}
