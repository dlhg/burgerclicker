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
          <section>{props.toolItemName}</section>
          <section>{props.toolItemCost}</section>
          <section>{props.toolItemDescription}</section>
          <section>{props.toolItemFlavorText}</section>
        </div>
      )}
    </>
  );
}
