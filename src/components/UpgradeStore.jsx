import React from "react";
import UpgradeItem from "./UpgradeItem";
import ToopTip from "./ToolTip";

import catpic from "../assets/images/cat_small_transparent.png";

export default function UpgradeStore(props) {
  return (
    <>
      <div className="upstore--container">
        <div className="upstore--left">
          <UpgradeItem
            itemPrice={1}
            itemImage={catpic}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
          />
        </div>

        <div className="upstore--right">
          <ToopTip />
        </div>
      </div>
    </>
  );
}
