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
    console.log(`boost function called`)
    console.log(`boost args (whatsBoosted, increase, durationInMS) = ${whatsBoosted}`)
    if (whatsBoosted === "BPS") {
      props.setTempBPSBoostMultiplier((prev) => prev + increase)
      setTimeout(() => {
        props.setTempBPSBoostMultiplier((prev) => prev - 1);
      }, durationInMS);
    }
    if (whatsBoosted === "BPC") {
      props.setTempBPCBoostMultiplier((prev) => prev + increase)
      setTimeout(() => {
        props.setTempBPCBoostMultiplier((prev) => prev - 1);
      }, durationInMS);
    }
    if (whatsBoosted === "BPS&BPC") {
      props.setTempBPSBoostMultiplier((prev) => prev + increase)
      props.setTempBPCBoostMultiplier((prev) => prev + increase)
      setTimeout(() => {
        props.setTempBPSBoostMultiplier((prev) => prev - 1);
      }, durationInMS);
      setTimeout(() => {
        props.setTempBPCBoostMultiplier((prev) => prev - 1);
      }, durationInMS);
    }

  }

  const increaseBPCMult_100_5s = () => {
    props.setTempBPCBoostMultiplier((prevMultiplier) => prevMultiplier + 1);

    // Set a timeout to decrease the multiplier after 5 seconds

  };

  return (
    <>
      <div className="upstore--container">
        <div className="upstore--left">
          <UpgradeItem
            //unique
            itemID={1}
            itemPrice={10}
            itemImage={catpic}
            itemName={"lucky burger cat"}
            itemDescription={"+1 Burger Per Click, and 1000% to production for 30s"}
            itemFlavorText={"A stray cat shows up. Adopt him as your mascot?"}
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 1}
            secondarySetter={boost}
            secondarySetterArgument={["BPS", "10", "30000"]}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 10}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 10"
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
            itemPrice={500}
            itemImage={occultpic}
            itemName={"burger sacrifice ritual"}
            itemDescription={"+10 Burger Per Click"}
            itemFlavorText={
              "At the Burger Temple, burgers ascend in savory sacrifice."
            }
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 10}
            secondarySetter={false}
            secondarySetterArgument={""}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 100}
            secondUnlockedCondtion={props.templeCount >= 1}
            unlockConditionsDescription="Total Burgers Produced >= 100, Temple Count >= 1"
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
            itemID={3}
            itemPrice={0}
            itemImage={gamblerpic}
            itemName={"gambler's hand"}
            itemDescription={"50/50 chance to double or halve your burgers"}
            itemFlavorText={"Take a chance?"}
            primarySetter={props.setBurgerCount}
            primarySetterArgument={(prev) =>
              Math.random() > 0.5 ? prev * 2 : prev / 2
            }
            secondarySetter={false}
            secondarySetterArgument={""}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 150}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 150"
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
            itemID={4}
            itemPrice={0}
            itemImage={gambler2pic}
            itemName={"gambler's hand 2"}
            itemDescription={
              "75/25 chance to triple your burgers or lose everything"
            }
            itemFlavorText={"Take a chance?"}
            primarySetter={props.setBurgerCount}
            primarySetterArgument={(prev) =>
              Math.random() > 0.25 ? prev * 3 : 0
            }
            secondarySetter={false}
            secondarySetterArgument={""}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 250}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 250"
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
            itemID={5}
            itemPrice={0}
            itemImage={scrollpic}
            itemName={"ancient scroll"}
            itemDescription={"+1000 burgers"}
            itemFlavorText={
              "1000 burgers for free if I recite this ancient spell? What's the catch?"
            }
            primarySetter={props.setBurgerCount}
            primarySetterArgument={(prev) => prev + 1000}
            secondarySetter={false}
            secondarySetterArgument={""}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 500}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 500"
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
            itemID={6}
            itemPrice={1000}
            itemImage={scrollpic}
            itemName={"pointer power"}
            itemDescription={"+1 to burgers/second produced by pointers"}
            itemFlavorText={"clicking up a storm!"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev + 1}
            /* without this secondary setter and arg, BPS for purchased pointers would not change and this would only apply to newly purchased pointers */
            // this needs to be updated
            secondarySetter={props.setBurgersPerSecond}
            secondarySetterArgument={(prev) => prev + props.pointerCount}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1000}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 1000"
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
            itemID={7}
            itemPrice={1500}
            itemImage={scrollpic}
            itemName={"pay a bonus to workers"}
            itemDescription={"+1 to burgers/second produced by workers"}
            itemFlavorText={"you get what you pay for"}
            primarySetter={props.setWorkerBPS}
            primarySetterArgument={(prev) => prev + 1}
            secondarySetter={props.setBurgersPerSecond}
            secondarySetterArgument={(prev) => prev + props.workerCount}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1500}
            secondUnlockedCondtion={true}
            unlockConditionsDescription="Total Burgers Produced >= 1500"
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
            itemID={8}
            itemPrice={1500}
            itemImage={elderspic}
            itemName={"council of the elders"}
            itemDescription={"+10 burgers per second produced by temples"}
            itemFlavorText={
              "Elder magicians amplify burger yields, conjuring culinary abundance."
            }
            primarySetter={props.setTempleBPS}
            primarySetterArgument={(prev) => prev + 10}
            secondarySetter={props.setBurgersPerSecond}
            secondarySetterArgument={(prev) => prev + props.templeCount * 10}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 5000}
            secondUnlockedCondtion={props.templeCount >= 5}
            unlockConditionsDescription="Total Burgers Produced >= 5000, Temple Count >= 5"
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
