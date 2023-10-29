import React, { useState } from "react";
import UpgradeItem from "./UpgradeItem";
import ToopTip from "./ToolTip";

import catpic from "../assets/images/cat_small_transparent.png";
import occultpic from "../assets/images/occult_small_transparent.png";

export default function UpgradeStore(props) {
  const [isAnUpgradeHovered, setIsAnUpgradeHovered] = useState(false);
  const [toolItemImage, setToolItemImage] = useState("");
  const [toolItemName, setToolItemName] = useState("");
  const [toolItemCost, setToolItemCost] = useState("");
  const [toolItemDescription, setToolItemDescription] = useState("");
  const [toolItemFlavorText, setToolItemFlavorText] = useState("");

  return (
    <>
      <div className="upstore--container">
        <div className="upstore--left">
          <UpgradeItem
            itemID={1}
            itemPrice={10}
            itemImage={catpic}
            itemName={"lucky burger cat"}
            itemDescription={"+1 Burger Per Click"}
            itemFlavorText={
              "A stray cat shows up at your door. Adopt him as your mascot?"
            }
            benefitAmount={(prev) => prev + 1}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 10}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            benefitSetter={props.setBurgersPerClick}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
          />
          <UpgradeItem
            itemID={2}
            itemPrice={100}
            itemImage={occultpic}
            itemName={"occult ritual"}
            itemDescription={"+10 Burger Per Click"}
            itemFlavorText={"You've got a bad feeling about this"}
            benefitSetter={props.setBurgersPerClick}
            benefitAmount={(prev) => prev + 10}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 100}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
          />
        </div>

        <div className="upstore--right">
          <ToopTip
            toolItemImage={toolItemFlavorText}
            toolItemName={toolItemName}
            toolItemCost={toolItemCost}
            toolItemDescription={toolItemDescription}
            toolItemFlavorText={toolItemFlavorText}
            isAnUpgradeHovered={isAnUpgradeHovered}
            burgerCount={props.burgerCount}
          />
        </div>
      </div>
    </>
  );
}
