import React, { useState } from "react";

function ToggleText(){
    const [show, setShow]=useState(false)

    return(
        <>
        <div>
            <button onClick={()=>setShow(!show)}>Toggle</button>
            {
                show && <p>Welcome to Credo Systemz</p>
            }
        </div>
        </>
    )
}

export default ToggleText