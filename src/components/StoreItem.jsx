import React from "react";

export default function StoreItem(props) {

    function buyItem() {
        if (props.storeItemPrice > props.burgerCount) {
            console.log('you tried to buy something that costs more burgs than what you have')
            return
        }
        props.setBurgerCount(prev => prev - props.storeItemPrice)
        props.setBurgersPerSecond(prev => prev + props.bpsIncrease)
    }


    return (
        <>
            <div className="store--item" onClick={() => buyItem()}>
                <div><img src={props.storeItemImage} alt="image of store item"></img></div>
                <div>{props.storeItemName}</div>
                <div>item price:{props.storeItemPrice}</div>
                <div>quantity owned:{props.storeItemQuantityOwned}</div>
            </div>
        </>
    )
}