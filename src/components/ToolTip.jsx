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
        <div className="tooltip--container">
          <section style={{ fontWeight: 'bolder' }}>{props.toolItemName}</section>


          <ul>
            <li> <section style={{ color: canAfford ? "inherit" : "red" }}>
              cost: {props.toolItemCost}🍔
            </section></li>
            <li> <section>{props.toolItemDescription}</section></li>

          </ul>


          <section>{props.toolItemFlavorText}</section>
        </div>
      )}
    </>
  );
}
