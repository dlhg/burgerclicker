import React from "react";

export default function Buildings(props) {
    return (
        <>
            <div id="Buildings--container">
                <div id="Building1">
                    {Array.from({ length: props.pointerCount }, (_, index) => (
                        <div key={index} className="pointer--image">
                            <img src={props.pointerpic} alt={`Pointer ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div id="Building2">
                    {Array.from({ length: props.workerCount }, (_, index) => (
                        <div key={index} className="worker--image">
                            <img src={props.workerpic} alt={`Worker ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div id="Building3">
                    {Array.from({ length: props.grillCount }, (_, index) => (
                        <div key={index} className="grill--image">
                            <img src={props.grillpic} alt={`Grill ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div id="Building4">
                    {Array.from({ length: props.bankCount }, (_, index) => (
                        <div key={index} className="bank--image">
                            <img src={props.bankpic} alt={`Bank ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div id="Building5">Building 5</div>
                <div id="Building6">Building 6</div>
            </div>
        </>
    );
}
