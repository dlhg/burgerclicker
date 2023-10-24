import React from "react";

export default function Buildings(props) {
    return (
        <>
            <div id="Buildings--container">
                <div id="Building1">
                    {Array.from({ length: props.pointerCount }, (_, index) => (
                        <div key={index} className="pointer-image">
                            <img src={props.pointerpic} alt={`Pointer ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div id="Building2">Building 2</div>
                <div id="Building3">Building 3</div>
                <div id="Building4">Building 4</div>
                <div id="Building5">Building 5</div>
                <div id="Building6">Building 6</div>
            </div>
        </>
    );
}
