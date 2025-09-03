import React from "react";
import useCounter from "./useCounter";

export default function CustomCounterApp(){
    const {count, increment, decrement, reset}=useCounter()

    return(
        <>
        <div style={{textAlign:"center", marginTop:"40px"}}>
            <h2>Custom Hook Counter Example</h2>

            <h3>Count Value : {count}</h3> 

            <label>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </label>
        </div>
        </>
    )
}