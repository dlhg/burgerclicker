import { func } from "prop-types";
import React from "react";

export default function TestConsoleButton(props) {

    function handleClick() {
        console.log('test btn clicked')
        props.buttonfunc(props.functionarg)

    }

    return (
        <>
            <button onClick={() => handleClick()}>{props.buttontext}</button>
            <br></br>
        </>
    )
}