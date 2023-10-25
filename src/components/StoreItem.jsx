import React from "react";
import useSound from "use-sound";
import { getRandomIndex } from "../Utils";
import { getRandomNumber } from "../Utils";
import click1 from "../assets/sfx/click1.wav";
import click2 from "../assets/sfx/click2.wav";
import click3 from "../assets/sfx/click3.wav";
import click4 from "../assets/sfx/click4.wav";
const clicksounds = [click1, click2, click3, click4];

export default function StoreItem(props) {
  const [play] = useSound(clicksounds[getRandomIndex(clicksounds)]);

  function buyItem() {
    if (props.storeItemPrice > props.burgerCount) {
      console.log(
        "you tried to buy something that costs more burgs than what you have"
      );
      return;
    }
    props.setBurgerCount((prev) => prev - props.storeItemPrice);
    props.setBurgersPerSecond((prev) => prev + props.bpsIncrease);
    props.itemSetter((prev) => prev + 1);
    play();
  }
  const textColor = props.burgerCount >= props.storeItemPrice ? "green" : "red";
  return (
    <>
      <div className="store--item" onClick={() => buyItem()}>
        <div id="store--item--img">
          <img src={props.storeItemImage} alt="image of store item"></img>
        </div>
        <div id="store--item--nameandprice">
          <div id="store--item--name">{props.storeItemName}</div>
          <br />
          <div id="store--item--cost" style={{ color: textColor }}>
            {props.storeItemPrice}🍔
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
