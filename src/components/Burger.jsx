import React from "react";

// burgers section should update every 100ms
//

export default function burger(props) {
    function clickBurger() {
        props.setBurgerCount(prevCount => prevCount + props.burgersPerClick)
    }

    return (
        <div>
            <section>Burgers: {props.displayedBurgerCount}</section>
            <section>
                Burgers Per Second: {props.burgersPerSecond}
            </section>
            <br></br>
            <br></br>
            <section>
                <img src={props.burgerpic} onClick={clickBurger}></img>
                <br></br>
                <br></br>

            </section>

        </div>
    )
}