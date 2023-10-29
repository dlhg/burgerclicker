import React, { useState } from "react";
import UpgradeItem from "./UpgradeItem";
import ToopTip from "./ToolTip";

import catpic from "../assets/images/cat_small_transparent.png";

/*
- state variable called currentlyHoveredItem
- when you hover over an UpgradeItem, it should update this stare

*/

export default function UpgradeStore(props) {
  const [currentlyHoveredItem, setCurrentlyHoveredItem] = useState("");

  return (
    <>
      <div className="upstore--container">
        <div className="upstore--left">
          <UpgradeItem
            itemID={1}
            itemPrice={1}
            itemImage={catpic}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            benefitSetter={props.setBurgersPerClick}
            benefitAmount={(prev) => prev + 1}
            unlockedCondition={props.burgerCount >= 10}
          />
        </div>

        <div className="upstore--right">
          <ToopTip currentlyHoveredItem="" />
        </div>
      </div>
    </>
  );
}
