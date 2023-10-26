/*
to add:
- handleClick function that:
    - checks if player has enough to afford item
    - if no, return
    - if yes:
        - set unPurchased to false
        - use other setter functions passed in as props to update things like BPS for buildings, or burgers per click

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
  const [unpurchased, setUnpurchased] = useState(true);
  return (
    <>
      {unpurchased && (
        <img
          src={props.upgradeItemImage}
          onClick={() => setUnpurchased(false)}
        ></img>
      )}
    </>
  );
}
