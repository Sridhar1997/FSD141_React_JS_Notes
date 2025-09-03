// JavaScript Object CSS  - Define a Style as a JavaScript Object and apply it

import React from "react";

export default function JSObjectCSS(){
    const myStyle={
        color:"purple",
        fontSize:"22px",
        border:"2px solid black",
        padding:"5px"
    }

    return(
        <>
        <div>
        <h2 style={myStyle}>
        JavaScript Object CSS Example
        </h2>

        <p style={{...myStyle, backgroundColor:"orange"}}>
            This is styled using JS Object
        </p>
        </div>
        </>
    )
}