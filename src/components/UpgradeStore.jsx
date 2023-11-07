import React, { useState } from "react";
import UpgradeItem from "./UpgradeItem";
import ToopTip from "./ToolTip";

import catpic from "../assets/images/cat_small_transparent.png";
import occultpic from "../assets/images/occult_small_transparent.png";
import gamblerpic from "../assets/images/gamblers_hand_small_transparent.png";
import gambler2pic from "../assets/images/gamblers_hand2_small_transparent.png";
import scrollpic from "../assets/images/scroll_small_transparent.png";
import elderspic from "../assets/images/elders_small_transparent.png";

export default function UpgradeStore(props) {
  const [isAnUpgradeHovered, setIsAnUpgradeHovered] = useState(false);
  const [toolItemImage, setToolItemImage] = useState("");
  const [toolItemName, setToolItemName] = useState("");
  const [toolItemCost, setToolItemCost] = useState("");
  const [toolItemDescription, setToolItemDescription] = useState("");
  const [toolItemFlavorText, setToolItemFlavorText] = useState("");
  const [
    toolItemUnlockConditionsDescription,
    setToolItemUnlockConditionsDescription,
  ] = useState("");

  // function to handle temp boosts to BPS, BPC, or both
  // whatsboosted can be either BPS, BPC, or BPS&BPC
  // increase is the amount the multiplier should increase (100% increase = +1 to multiplier)
  // duration in MS is the boost duration in MS (1s = 1000ms)
  function boost(whatsBoosted, increase, durationInMS) {
    if (whatsBoosted === "BPS") {
      props.setIsBoostActive(true);
      props.setTempBPSBoostMultiplier((prev) => prev + increase);
      setTimeout(() => {
        props.setIsBoostActive(false);
        props.setTempBPSBoostMultiplier((prev) => prev - increase);
      }, durationInMS);
    }
    if (whatsBoosted === "BPC") {
      props.setIsBoostActive(true);
      props.setTempBPCBoostMultiplier((prev) => prev + increase);
      setTimeout(() => {
        props.setIsBoostActive(false);
        props.setTempBPCBoostMultiplier((prev) => prev - increase);
      }, durationInMS);
    }
    if (whatsBoosted === "BPSBPC") {
      props.setIsBoostActive(true);
      props.setTempBPSBoostMultiplier((prev) => prev + increase);
      props.setTempBPCBoostMultiplier((prev) => prev + increase);
      setTimeout(() => {
        props.setTempBPSBoostMultiplier((prev) => prev - increase);
      }, durationInMS);
      setTimeout(() => {
        props.setIsBoostActive(false);
        props.setTempBPCBoostMultiplier((prev) => prev - increase);
      }, durationInMS);
    }
  }

  // // increase BPC multiplier by 100% for 5 seconds
  // const increaseBPCMult_100_5s = () => {
  //   props.setTempBPCBoostMultiplier((prevMultiplier) => prevMultiplier + 1);

  //   // Set a timeout to decrease the multiplier after 5 seconds
  //   setTimeout(() => {
  //     props.setTempBPCBoostMultiplier((prevMultiplier) => prevMultiplier - 1);
  //   }, 5000);
  // };

  return (
    <>
      <div className="upstore--container">
        <div className="upstore--left">
          <UpgradeItem
            //unique
            itemID={1}
            itemPrice={1}
            itemImage={catpic}
            itemName={"meredith"}
            itemDescription={
              "+1 Burger Per Click, and 1000% to burgers/click for 10s"
            }
            itemFlavorText={"A hungry stray cat shows up. Feed her a burger?"}
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 1}
            secondarySetter={boost}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={["BPC", 9, 10000]}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 1"
            //boilerplate
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            setToolItemUnlockConditionsDescription={
              setToolItemUnlockConditionsDescription
            }
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
            //unique
            itemID={2}
            itemPrice={1}
            itemImage={scrollpic}
            itemName={"ancient scroll"}
            itemDescription={
              "+10 Burger Per Click, and 1000% to burgers/click for 10s"
            }
            itemFlavorText={"Jazz?"}
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 10}
            secondarySetter={boost}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={["BPSBPC", 9, 10000]}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 1"
            //boilerplate
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            setToolItemUnlockConditionsDescription={
              setToolItemUnlockConditionsDescription
            }
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
        </div>

        <div className="upstore--right">
          <ToopTip
            toolItemImage={toolItemFlavorText}
            toolItemName={toolItemName}
            toolItemCost={toolItemCost}
            toolItemDescription={toolItemDescription}
            toolItemFlavorText={toolItemFlavorText}
            toolItemUnlockConditionsDescription={
              toolItemUnlockConditionsDescription
            }
            isAnUpgradeHovered={isAnUpgradeHovered}
            burgerCount={props.burgerCount}
          />
        </div>
      </div>
    </>
  );
}
