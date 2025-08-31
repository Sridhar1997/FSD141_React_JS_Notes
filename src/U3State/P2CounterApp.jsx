import React, { useState } from "react";

function P2CounterApp(){
    const [count, setCount]=useState(0)

    return(
        <>
        <p>Counter App using Functional Component</p>

        <p>Count Value - {count} </p>

        <label>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </label>
        </>
    )
}

export default P2CounterApp