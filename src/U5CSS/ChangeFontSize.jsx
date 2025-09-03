import React, { useState } from "react";

export default function ChangeFontSize(){
    const [size, setSize]=useState(16)

    return(
        <>
        <div>
            <p style={{fontSize:size}}>Resizable Text</p>

            <label>
                <button onClick={()=>setSize(size+2)}>Increase</button>
                <button onClick={()=>setSize(size-2)}>Decrease</button>
            </label>
        </div>
        </>
    )
}