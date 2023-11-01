//should update to look more like a playing card

import React from "react";
export default function ToopTip(props) {
  const canAfford = props.burgerCount >= props.toolItemCost;
  return (
    <>
      {props.isAnUpgradeHovered && (
        <div className="tooltip--container">
          <section style={{ fontWeight: "bolder" }}>
            {props.toolItemName}
          </section>

          <ul>
            <li>
              {" "}
              <section style={{ color: canAfford ? "inherit" : "red" }}>
                cost: {props.toolItemCost}🍔
              </section>
            </li>
            <li>
              {" "}
              <section>{props.toolItemDescription}</section>
            </li>
          </ul>

          <section>{props.toolItemFlavorText}</section>
          <section>
            requirements: {props.toolItemUnlockConditionsDescription}
          </section>
        </div>
      )}
    </>
  );
}
