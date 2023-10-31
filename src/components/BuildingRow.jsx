// row of building images to be used in buildings game area

import React from "react";

export default function BuildingRow(props) {
  return (
    <div className="building--row">
      {Array.from({ length: Math.min(200, props.count) }, (_, index) => (
        <div key={index} className={props.className}>
          <img src={props.pic} alt={`${props.alt} ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
