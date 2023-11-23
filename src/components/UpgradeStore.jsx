import React, { useState } from "react";
import UpgradeItem from "./UpgradeItem";
import ToopTip from "./ToolTip";

import catpic from "../assets/images/meredith_small_transparent.png";
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
        props.setTempBPSBoostMultiplier((prev) =>
          prev - increase >= 0 ? prev - increase : 0
        );
      }, durationInMS);
    }
    if (whatsBoosted === "BPC") {
      props.setIsBoostActive(true);
      props.setTempBPCBoostMultiplier((prev) => prev + increase);
      setTimeout(() => {
        props.setIsBoostActive(false);
        props.setTempBPCBoostMultiplier((prev) =>
          prev - increase >= 0 ? prev - increase : 1
        );
      }, durationInMS);
    }
    if (whatsBoosted === "BPSBPC") {
      props.setIsBoostActive(true);
      props.setTempBPSBoostMultiplier((prev) => prev + increase);
      props.setTempBPCBoostMultiplier((prev) => prev + increase);
      setTimeout(() => {
        props.setTempBPSBoostMultiplier((prev) =>
          prev - increase >= 0 ? prev - increase : 0
        );
      }, durationInMS);
      setTimeout(() => {
        props.setIsBoostActive(false);
        props.setTempBPCBoostMultiplier((prev) =>
          prev - increase >= 0 ? prev - increase : 1
        );
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
            itemName={"Meredith"}
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
            secondUnlockedCondtion={1 + 1 === 2} //since conditional rendering in UpgradeItem requires both primary and second unlock condition to eval to true to render, putting something obviously true as secondary condition in situations where i don't want to add a second condition
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
            itemPrice={1000}
            itemImage={scrollpic}
            itemName={"ancient scroll"}
            itemDescription={
              "+10 Burger Per Click, 1000% to burgers per click AND burgers per second for 10s"
            }
            itemFlavorText={
              "This ancient scroll possesses powers beyond the imagination"
            }
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 10}
            secondarySetter={boost}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={["BPSBPC", 9, 10000]}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1000}
            secondUnlockedCondtion={1 + 1 === 2}
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
          {/* pointer power upgrades */}
          <UpgradeItem
            //unique
            itemID={3}
            itemPrice={100}
            itemImage={scrollpic}
            itemName={"pointer power 1"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text for pp1"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 5}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 5"
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
            itemPrice={1000}
            itemImage={scrollpic}
            itemName={"pointer power 2"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 10}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 10"
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
            itemPrice={10000}
            itemImage={scrollpic}
            itemName={"pointer power 3"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 25}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 25"
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
            itemPrice={100000}
            itemImage={scrollpic}
            itemName={"pointer power 4"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 50}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 50"
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
            itemPrice={1000000}
            itemImage={scrollpic}
            itemName={"pointer power 5"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 100}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 100"
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
            itemPrice={10000000}
            itemImage={scrollpic}
            itemName={"pointer power 6"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 150}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 150"
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
            itemPrice={100000000}
            itemImage={scrollpic}
            itemName={"pointer power 7"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 200}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 200"
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
            itemID={9}
            itemPrice={1000000000}
            itemImage={scrollpic}
            itemName={"pointer power 8"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 250}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 250"
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
            itemID={10}
            itemPrice={10000000000}
            itemImage={scrollpic}
            itemName={"pointer power 9"}
            itemDescription={"x2 burgers per second produced by pointers"}
            itemFlavorText={"flavor text"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev * 2}
            secondarySetter={false}
            // boost type (BPC,BPS,or BPSBPC), multiplier add (base value 1), duration in ms
            secondarySetterArgument={""}
            unlockedCondition={props.pointerCount >= 300}
            secondUnlockedCondtion={1 + 1 === 2}
            unlockConditionsDescription="Total Pointers >= 300"
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
