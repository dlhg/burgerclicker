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
  const canAfford = props.burgerCount >= props.toolItemCost;
  return (
    <>
      {props.isAnUpgradeHovered && (
        <div>
          <section>{props.toolItemName}</section>
          <section style={{ color: canAfford ? "inherit" : "red" }}>
            cost: {props.toolItemCost}🍔
          </section>
          <section>{props.toolItemDescription}</section>
          <section>{props.toolItemFlavorText}</section>
        </div>
      )}
    </>
  );
}
