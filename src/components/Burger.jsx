import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import click1 from '../assets/sfx/click1.wav'
import click2 from '../assets/sfx/click2.wav'
import click3 from '../assets/sfx/click3.wav'
import click4 from '../assets/sfx/click4.wav'
const clicksounds = [click1, click2, click3, click4]


function getRandomNumber(length) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (length + 1));
    return randomNumber;
}

function getRandomIndex(array) {
    const length = array.length;
    return getRandomNumber(length);
}

export default function Burger(props) {
    const [play] = useSound(clicksounds[getRandomIndex(clicksounds)]);

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
        play()
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
