/*
to add:
- handleClick function that:
    - checks if player has enough to afford item
    - if no, return
    - if yes:
        - set unPurchased to false
        - use other setter functions passed in as props to update things like BPS for buildings, or burgers per click
        - add upgrade to owned upgrades list and display that list to the player somewhere, maybe info section like CC

- tooltip that shows on hover to show item price, name, and description
- setter functions for state variables like burgers per click and BPS for individual buildings should be passed in so that upgrades can modify these states
- add a section in info or somewhere else to show the player all of their current upgrades


- once all functionality is set up, move on to styling
    - upgrade items should have transparent background instead of white
    - if player's burgers < item cost, then upgrade item should be darkened using css filter
    - art enhancements (ex. higher tiers of upgrade look increasingly more powerful or at least just different)
*/

import React, { useState } from "react";

export default function UpgradeItem(props) {
  const isPurchased = props.purchasedUpgradeIDs.includes(props.itemID);

  function buyUpgrade() {
    if (props.burgerCount < props.itemPrice) {
      return;
    }
    props.setBurgerCount((prevCount) => prevCount - props.itemPrice);
    props.primarySetter(props.primarySetterArgument);
    props.setIsAnUpgradeHovered(false);
    props.setPurchasedUpgradeIDs((prev) => [...prev, props.itemID]);

    if (props.secondarySetter !== false) {
      // if just receiving a single as a secondary setter arg, use that (typeof will be function), but if receiving multiple args as an array (ex.boost function), destructure to use array elements as args   
      if (typeof props.secondarySetterArgument !== "object") {
        props.secondarySetter(props.secondarySetterArgument)
      } else
        props.secondarySetter(...props.secondarySetterArgument);
    }

    // should also update a list of currently owned upgrades, to be displayed in stats screen
  }

  function handleMouseOver() {
    props.setIsAnUpgradeHovered(true);
    props.setToolItemName(props.itemName);
    props.setToolItemCost(props.itemPrice);
    props.setToolItemDescription(props.itemDescription);
    props.setToolItemFlavorText(props.itemFlavorText);
    props.setToolItemUnlockConditionsDescription(
      props.unlockConditionsDescription
    );
  }

  function handleMouseOut() {
    props.setIsAnUpgradeHovered(false);
  }

  return (
    <>
      {!props.purchasedUpgradeIDs.includes(props.itemID) &&
        props.unlockedCondition &&
        props.secondUnlockedCondtion &&
        (
          <img
            src={props.itemImage}
            onClick={() => buyUpgrade()}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></img>
        )}
    </>
  );
}
