import React from "react";
import { formatNumber, formatNumberTruncated } from "../utils";
import { scaleItemPrice, calculateTotalPrice } from "../utils";

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

    props.setBurgerCount(
      (prev) =>
        prev +
        calculateTotalPrice(props.storeItemPrice, props.buyOrSellQuantity) * 0.5
    );
    props.setTotalBuildingBPS((prev) => prev - props.bpsIncrease * amount);
    props.itemSetter((prev) => prev - amount);
  }

  function buyItem(amount) {
    const price = calculateTotalPrice(props.storeItemPrice, amount);
    if (price > props.burgerCount) {
      console.log(
        "you tried to buy something that costs more burgs than what you have"
      );
      return;
    }

    props.setBurgerCount((prev) => prev - price);
    props.setTotalBuildingBPS((prev) => prev + props.bpsIncrease * amount);
    props.itemSetter((prev) => prev + amount);
  }

  function handleClick() {
    if (props.buyOrSell === "buy") {
      buyItem(props.buyOrSellQuantity);
    }
    if (props.buyOrSell === "sell") {
      sellItem(props.buyOrSellQuantity);
    }
  }
  // need to change buyTextColor and sellTextColor to deal with scaling
  const buyTextColor =
    props.burgerCount >=
    calculateTotalPrice(props.storeItemPrice, props.buyOrSellQuantity)
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
            {/* this field displays the price to the user, but actual pricing is handled in buyItem and sellItem */}
            {props.buyOrSell === "buy"
              ? formatNumberTruncated(
                  calculateTotalPrice(
                    props.storeItemPrice,
                    props.buyOrSellQuantity
                  )
                )
              : formatNumberTruncated(
                  calculateTotalPrice(
                    props.storeItemPrice,
                    props.buyOrSellQuantity
                  ) * 0.5
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
