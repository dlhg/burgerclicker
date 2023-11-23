import React from "react";

export default function Legacy(props) {
  function handlePrestige() {
    // show pop-up explaining prestige to player and ask them to confirm
    // if no, go back to game area
    // if yes, proceed
    // end any boosts in progress(done)
    props.setIsBoostActive(false);
    props.setTempBPCBoostMultiplier(false);
    props.setTempBPSBoostMultiplier(false);
    // show perspective shift animation for a few seconds
    // set quip level to 0 (done)
    props.setCurrentQuipLevel(0);
    // convert player's current burgs to prestige token currency (done)
    props.setPrestigeTokenCount(props.burgerCount)
    // set burger count to 0 (done)
    props.setBurgerCount(0);
    // set burgers per click to 1
    props.setBurgersPerClick(1);
    // set all building counts to 0 (done)
    props.setPointerCount(0);
    props.setWorkerCount(0);
    props.setGrillCount(0);
    props.setTruckCount(0);
    props.setBankCount(0);
    props.setTempleCount(0);
    props.setLabCount(0);
    props.setSpacecraftCount(0);

    // display a store with prestige items and let player shop, as well as a button to start NG+
    // autosave
    // start NG+
    // setTimeout(() => {

    // }, 1400);
    props.setMainArea("buildings")
  }


  return (
    <div>
      <button onClick={() => handlePrestige()}>Click Here to Prestige</button>
      <br />
      <section>
        You have {props.prestigeTokenCount} prestige tokens
      </section>
    </div>
  );
}
