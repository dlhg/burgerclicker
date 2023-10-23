import React from "react";
import Quips from "./Quips";

export default function Navbar(props) {
    return (
        <>
            <button onClick={() => props.setMainArea("options")}>options</button>
            <button onClick={() => props.setMainArea("stats")}>stats</button>
            <Quips

            />
            <button onClick={() => props.setMainArea("info")}>info</button>
            <button onClick={() => props.setMainArea("legacy")}>legacy</button>
        </>
    )
}