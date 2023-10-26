//items earned by getting certain amount of burgs, buildings etc

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
