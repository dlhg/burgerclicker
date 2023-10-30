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
            itemFlavorText={"A stray cat shows up. Adopt him as your mascot?"}
            primarySetter={props.setBurgersPerClick}
            primarySetterArgument={(prev) => prev + 1}
            secondarySetter={false}
            secondarySetterArgument={""}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 10}
            secondUnlockedCondtion={true}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
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
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
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
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
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
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
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
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
            itemID={6}
            itemPrice={1000}
            itemImage={scrollpic}
            itemName={"pointer power"}
            itemDescription={"+1 to burgers/second produced by pointers"}
            itemFlavorText={"clicking up a storm!"}
            primarySetter={props.setPointerBPS}
            primarySetterArgument={(prev) => prev + 1}
            /* without this secondary setter and arg, BPS for purchased pointers would not change and this would only apply to newly purchased pointers */
            secondarySetter={props.setBurgersPerSecond}
            secondarySetterArgument={(prev) => prev + props.pointerCount}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 1000}
            secondUnlockedCondtion={true}
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />

          <UpgradeItem
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
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
            purchasedUpgradeIDs={props.purchasedUpgradeIDs}
            setPurchasedUpgradeIDs={props.setPurchasedUpgradeIDs}
          />
          <UpgradeItem
            //unique item props
            itemID={8}
            itemPrice={1500}
            itemImage={elderspic}
            itemName={"council of the elders"}
            itemDescription={"+10 burgers per second produced by temples"}
            itemFlavorText={
              "Elder magicians amplify burger yields, conjuring culinary abundance."
            }
            primarySetter={props.setTempleBps}
            primarySetterArgument={(prev) => prev + 10}
            secondarySetter={props.setBurgersPerSecond}
            secondarySetterArgument={(prev) => prev + props.templeCount * 10}
            unlockedCondition={props.totalBurgersProducedUnformatted >= 5000}
            secondUnlockedCondtion={props.templeCount >= 5}
            //boilerplate
            burgerCount={props.burgerCount}
            setBurgerCount={props.setBurgerCount}
            setIsAnUpgradeHovered={setIsAnUpgradeHovered}
            setToolItemImage={setToolItemImage}
            setToolItemName={setToolItemName}
            setToolItemCost={setToolItemCost}
            setToolItemDescription={setToolItemDescription}
            setToolItemFlavorText={setToolItemFlavorText}
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
            isAnUpgradeHovered={isAnUpgradeHovered}
            burgerCount={props.burgerCount}
          />
        </div>
      </div>
    </>
  );
}
