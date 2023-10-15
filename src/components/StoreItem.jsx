import React from "react";
import useSound from "use-sound";
import { getRandomIndex } from "../Utils";
import { getRandomNumber } from "../Utils";
import click1 from '../assets/sfx/click1.wav'
import click2 from '../assets/sfx/click2.wav'
import click3 from '../assets/sfx/click3.wav'
import click4 from '../assets/sfx/click4.wav'
const clicksounds = [click1, click2, click3, click4]

export default function StoreItem(props) {
    const [play] = useSound(clicksounds[getRandomIndex(clicksounds)]);

    function buyItem() {
        if (props.storeItemPrice > props.burgerCount) {
            console.log('you tried to buy something that costs more burgs than what you have')
            return
        }
        props.setBurgerCount(prev => prev - props.storeItemPrice)
        props.setBurgersPerSecond(prev => prev + props.bpsIncrease)
        props.setPointerCount(prev => prev + 1)
        play()
    }


    return (
        <>
            <div className="store--item" onClick={() => buyItem()}>
                <div><img src={props.storeItemImage} alt="image of store item"></img></div>
                <div>{props.storeItemName}</div>
                <div>item price:{props.storeItemPrice}</div>
                <div>quantity owned:{props.pointerCount}</div>
            </div>
        </>
    )
}