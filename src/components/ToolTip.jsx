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
          <section>name : {props.toolItemName}</section>
          <section>cost : {props.toolItemCost}</section>
          <section>description : {props.toolItemDescription}</section>
          <section>{props.toolItemFlavorText}</section>
        </div>
      )}
    </>
  );
}
