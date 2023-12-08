import React from "react";
import { formatNumber, formatNumberTruncated } from "../utils";
import { scaleItemPrice } from "../utils";

//to fix:
//- price scaling should apply for buying and selling
// https://cookieclicker.fandom.com/wiki/Building
// buy 10 = 20.303718238 * base price * amount
// buy 100 = 7828749.671335256 * base price
// same should go for sell, but just divide by 2

// buying 1 at a time,

export default function StoreItem(props) {
  //const [play] = useSound(clicksounds[getRandomIndex(clicksounds)]);

  function sellItem(amount) {
    if (props.itemCount < amount) {
      console.log("you tried to sell more buildings than what you have");
      return;
    }
    //you get 50% of the original price back if selling, maybe i can make this dynamic in the future
    props.setBurgerCount((prev) => prev + props.storeItemPrice * amount * 0.5); //need to change this line to introduce scaling
    props.setTotalBuildingBPS((prev) => prev - props.bpsIncrease * amount);
    props.itemSetter((prev) => prev - amount);
  }

  function buyItem(amount) {
    if (props.storeItemPrice * amount > props.burgerCount) {
      console.log(
        "you tried to buy something that costs more burgs than what you have"
      );
      return;
    }
    props.setBurgerCount((prev) => prev - props.storeItemPrice * amount); ///need to change this line to introduce scaling
    props.setTotalBuildingBPS((prev) => prev + props.bpsIncrease * amount);
    props.itemSetter((prev) => prev + amount);
    //play();
  }

  function handleClick() {
    if (props.buyOrSell === "buy") {
      buyItem(props.buyOrSellQuantity);
    }
    if (props.buyOrSell === "sell") {
      sellItem(props.buyOrSellQuantity);
    } else {
      console.log(
        `error - buyOrSell is ${props.buyOrSell} which is not valid, it is expected to be a string "buy or string "sell"`
      );
    }
  }

  const buyTextColor =
    props.burgerCount >= props.storeItemPrice * props.buyOrSellQuantity
      ? "green"
      : "red";
  // this is used for selling - if the number of buildings you want to sell is equal or greater than the sell amount, should be green. if not, red.
  const sellTextColor =
    props.itemCount >= props.buyOrSellQuantity ? "green" : "red";

  return (
    <>
      <div className="store--item" onClick={() => handleClick()}>
        <div id="store--item--img">
          <img src={props.storeItemImage} alt="image of store item"></img>
        </div>
        <div id="store--item--nameandprice">
          <div id="store--item--name">{props.storeItemName}</div>
          <br />
          <div
            id="store--item--cost"
            style={{
              color: props.buyOrSell === "buy" ? buyTextColor : sellTextColor,
            }}
          >
            {props.buyOrSell === "buy"
              ? formatNumberTruncated(
                  props.storeItemPrice * props.buyOrSellQuantity
                )
              : formatNumberTruncated(
                  props.storeItemPrice * 0.5 * props.buyOrSellQuantity
                )}
            🍔
          </div>
        </div>
        <div id="store--item--quantityandbps">
          <div id="store--item--quantity">{props.itemCount}</div>
          <div id="store--item--bps">{props.bpsIncrease}b/s</div>
        </div>
      </div>
    </>
  );
}
