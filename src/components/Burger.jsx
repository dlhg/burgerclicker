import React, { useEffect, useState } from "react";

export default function Burger(props) {

    useEffect(() => {
        const interval = setInterval(() => {
            props.setBurgerCount(prevCount => prevCount + props.burgersPerSecond / 10);
            props.setBurgersMadeFromAutomation(prevCount => prevCount + props.burgersPerSecond / 10);
        }, 100);

        return () => clearInterval(interval);
    }, [props.burgersPerSecond]);


    //should eventually extend this function to deal with higher burger numbers
    function formatNumber(number) {
        if (number >= 1e9) {
            return (number / 1e9).toFixed(3) + " billion";
        } else if (number >= 1e6) {
            return (number / 1e6).toFixed(3) + " million";
        } else {
            return number.toFixed(0);
        }
    }

    function handleBurgerClick() {
        props.setBurgerCount(prevCount => prevCount + props.burgersPerClick);
        props.setBurgersMadeFromClicking(prevCount => prevCount + props.burgersPerClick);
    }

    return (
        <div>
            <section>
                Burgers: {formatNumber(props.displayedBurgerCount)}
            </section>
            <section>
                Total Burgers Produced: {props.totalBurgersProduced}
            </section>

            <section>
                Burgers Per Second: {formatNumber(props.burgersPerSecond)}
            </section>
            <section>
                Burgers Per Click: {formatNumber(props.burgersPerClick)}
            </section>
            <section>
                Burgers Made By Clicking: {formatNumber(props.burgersMadeFromClicking)}
            </section>
            <section>
                {/*why do i need to multiply this by two to have it be accurate? */}
                Burgers Made By Automation: {formatNumber(props.burgersMadeFromAutomation * 2)}
            </section>

            <br />
            <br />

            <section>
                <img src={props.burgerpic} onClick={handleBurgerClick} alt="Burger" />
                <br />
                <br />
                <br />
                <br />
            </section>
        </div>
    );
}
