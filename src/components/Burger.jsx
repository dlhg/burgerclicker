import React from "react";



export default function burger(props) {
    function clickBurger() {
        props.setBurgerCount(prevCount => prevCount + props.burgersPerClick)
    }

    return (
        <div>
            <section>Burgers: {props.burgerCount}</section>
            <section>
                Burgers Per Second: {props.burgersPerSecond}
            </section>
            <section>
                <img src={props.burgerpic} onClick={clickBurger}></img>
            </section>

        </div>
    )
}