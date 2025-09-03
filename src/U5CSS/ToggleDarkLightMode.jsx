import React, { useState } from "react";

export default function ToggleDarkLightMode(){
    const [dark, setDark]=useState(false)

    return(
        <>
        <div 
        style={{
            backgroundColor:dark ? "black" : "white",
            color:dark ? "white" : "black",
            padding:"20px",
            height:"100vh"
        }}
        >

            <p>Welcome to Credo Systemz</p>
            <p>Full Stack Web Development with AI</p>
            <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
        </div>
        </>
    )
}