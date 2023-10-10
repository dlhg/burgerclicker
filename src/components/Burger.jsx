import React, { useEffect } from "react";

export default function Burger(props) {
    useEffect(() => {
        const interval = setInterval(() => {
            props.setBurgerCount(prevCount => prevCount + props.burgersPerSecond / 10);
        }, 100);

        return () => clearInterval(interval);
    }, [props.burgersPerSecond, props.setBurgerCount]);

    function formatNumber(number) {
        if (number >= 1e12) {
            return (number / 1e12).toFixed(3) + " trillion";
        } else if (number >= 1e9) {
            return (number / 1e9).toFixed(3) + " billion";
        } else if (number >= 1e6) {
            return (number / 1e6).toFixed(3) + " million";
        } else {
            return number.toFixed(0);
        }
    }

    function clickBurger() {
        props.setBurgerCount(prevCount => prevCount + props.burgersPerClick);
    }

    return (
        <div>
            <section>
                Burgers: {formatNumber(props.displayedBurgerCount)}
            </section>

            <section>
                Burgers Per Second: {formatNumber(props.burgersPerSecond)}
            </section>
            <section>
                Burgers Per Click: {props.burgersPerClick}
            </section>

            <br />
            <br />

            <section>
                <img src={props.burgerpic} onClick={clickBurger} alt="Burger" />
                <br />
                <br />
            </section>
        </div>
    );
}
