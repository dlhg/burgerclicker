import React from "react";

export default function Buildings(props) {
  return (
    <>
      <div id="Buildings--container">
        <div id="Building1">
          {/*The Math here ensures max array length is 200, since I'm currently not showing players ALL their buildings when they have enough to cover the screen */}
          {Array.from(
            { length: Math.min(200, props.pointerCount) },
            (_, index) => (
              <div key={index} className="pointer--image">
                <img src={props.pointerpic} alt={`Pointer ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building2">
          {Array.from(
            { length: Math.min(200, props.workerCount) },
            (_, index) => (
              <div key={index} className="worker--image">
                <img src={props.workerpic} alt={`Worker ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building3">
          {Array.from(
            { length: Math.min(200, props.grillCount) },
            (_, index) => (
              <div key={index} className="grill--image">
                <img src={props.grillpic} alt={`Grill ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building4">
          {Array.from(
            { length: Math.min(200, props.truckCount) },
            (_, index) => (
              <div key={index} className="truck--image">
                <img src={props.truckpic} alt={`Truck ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building5">
          {Array.from(
            { length: Math.min(200, props.bankCount) },
            (_, index) => (
              <div key={index} className="bank--image">
                <img src={props.bankpic} alt={`Bank ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building6">
          {Array.from(
            { length: Math.min(200, props.templeCount) },
            (_, index) => (
              <div key={index} className="temple--image">
                <img src={props.templepic} alt={`Temple ${index + 1}`} />
              </div>
            )
          )}
        </div>
        <div id="Building7">
          {Array.from({ length: Math.min(200, props.labCount) }, (_, index) => (
            <div key={index} className="lab--image">
              <img src={props.labpic} alt={`Lab ${index + 1}`} />
            </div>
          ))}
        </div>
        <div id="Building7">
          {Array.from(
            { length: Math.min(200, props.spacecraftCount) },
            (_, index) => (
              <div key={index} className="spacecraft--image">
                <img
                  src={props.spacecraftpic}
                  alt={`Spacecraft ${index + 1}`}
                />
              </div>
            )
          )}
        </div>
        <div id="Building8">
          {Array.from(
            { length: Math.min(200, props.portalCount) },
            (_, index) => (
              <div key={index} className="portal--image">
                <img src={props.portalpic} alt={`Portal ${index + 1}`} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
