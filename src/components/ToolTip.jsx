import React from "react";

/*
props:
- Upgrade image
- Upgrade name
- Upgrade cost
- Upgrade descripton
- Upgrade flavor text

*/

export default function ToopTip(props) {
  return (
    <>
      {props.isAnUpgradeHovered && (
        <div>
          <section>image : {}</section>
          <section>name : {}</section>
          <section>cost : {}</section>
          <section>description : {}</section>
          <section>flavor text : {}</section>
        </div>
      )}
    </>
  );
}
