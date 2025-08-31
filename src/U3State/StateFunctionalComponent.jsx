import React, { useState } from "react";

function StateFunctionalComponent(){
    const [msg, setMSG]=useState("Welcome to Credo Systemz")

    return(
        <>
        <p>State - Functional Component</p>
        <p>State Value - {msg}</p>

        <label>
            <button onClick={()=>setMSG("Thanks to Visit Credo Systemz")}>Change Content</button>
            <button onClick={()=>setMSG("Welcome to Credo Systemz")}>Reset Content</button>
        </label>
        </>
    )
}
export default StateFunctionalComponent