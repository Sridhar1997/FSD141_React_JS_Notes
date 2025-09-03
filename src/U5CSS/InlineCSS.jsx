import React from "react";

export default function InlineCSS(){
    return(
        <>
        <div>
            {/* you can directly apply css inside an element using the style attribute 
            The value must be a JavaScript Object, CSS Properties are written in camelCase */}
            <h2 style={{color:"black", fontSize:"24px", backgroundColor:"orange", padding:"20px"}}>Inline CSS Examples</h2>
            <p style={{backgroundColor:"yellow", padding:"10px"}}>This is Styled using Inline CSS</p>
        </div>
        </>
    )
}