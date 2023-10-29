import React from "react";
import UpgradeItem from "./UpgradeItem";

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
          />
        </div>

        <div className="upstore--right"></div>
      </div>
    </>
  );
}
