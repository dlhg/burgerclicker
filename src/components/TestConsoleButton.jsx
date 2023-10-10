import { func } from "prop-types";
import React from "react";

export default function TestConsoleButton(props) {
    return (
        <button onClick={() => props.buttonfunction(prev => prev + 1)}>{props.buttontext}</button>
    )
}