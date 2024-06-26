// this component shows rows containing each building you own

import React from "react";
import * as Tone from "tone";
import BuildingRow from "./BuildingRow";
import ToneJSButton from "./ToneJSButton";
import Graphs from "./Graphs";

export default function Buildings(props) {
  return (
    <>
      <div className="buildings--wrapper">
        {/* <div id="Building1">
          <BuildingRow
            count={props.pointerCount}
            pic={props.pointerpic}
            alt="Pointer"
            className="pointer--image"
          />
        </div> */}
        {/* {props.pointerCount >= 1 && (
          <button onClick={() => props.setMainArea("minigame")}>
            pointer game (unlock by having 1 pointer) - this is a test/template
            game component and not something the player will see in future
            versions
          </button>
        )} */}

        {/* <div id="Building2">
          <BuildingRow
            count={props.workerCount}
            pic={props.workerpic}
            alt="Worker"
            className="worker--image"
          />
        </div> */}
        {props.workerCount >= 2 && (
          <button
            onClick={() => props.setMainArea("minigame--burger--assembly")}
          >
            burger assembly game (unlock by having 2 workers)
          </button>
        )}
        {props.workerCount >= 2 && (
          <button onClick={() => props.setMainArea("minigame--NPC--battle")}>
            NPC battle game (unlock by having 2 workers)
          </button>
        )}
        {/* <ToneJSButton /> */}

        {/* <div id="Building3">
          <BuildingRow
            count={props.grillCount}
            pic={props.grillpic}
            alt="Grill"
            className="grill--image"
          />
        </div>

        <div id="Building4">
          <BuildingRow
            count={props.truckCount}
            pic={props.truckpic}
            alt="Truck"
            className="truck--image"
          />
        </div>

        <div id="Building5">
          <BuildingRow
            count={props.bankCount}
            pic={props.bankpic}
            alt="Bank"
            className="bank--image"
          />
        </div>

        <div id="Building6">
          <BuildingRow
            count={props.templeCount}
            pic={props.templepic}
            alt="Temple"
            className="temple--image"
          />
        </div>

        <div id="Building7">
          <BuildingRow
            count={props.labCount}
            pic={props.labpic}
            alt="Lab"
            className="lab--image"
          />
        </div>

        <div id="Building8">
          <BuildingRow
            count={props.spacecraftCount}
            pic={props.spacecraftpic}
            alt="Spacecraft"
            className="spacecraft--image"
          />
        </div>

        <div id="Building9">
          <BuildingRow
            count={props.portalCount}
            pic={props.portalpic}
            alt="Portal"
            className="portal--image"
          />
        </div> */}
        <Graphs
          burgerCount={props.burgerCount}
          totalBuildingBPS={props.totalBuildingBPS}
        />
      </div>
    </>
  );
}
