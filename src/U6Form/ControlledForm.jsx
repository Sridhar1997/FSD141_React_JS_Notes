// Controlled Components - Form elements (input, textarea, select) are controlled by react state 
// the value of the input is always taken from state (useState())
// any change updates the state -> react re-renders -> ui shows updated value
// recommended way in react accps 

import React, { useState } from "react";

export default function ControlledForm(){
    const [name, setName]=useState("")

    const handelSubmit=(e)=>{
        e.preventDefault()
        alert(`Controlled Form Value : ${name}`)
    }

    return(
        <>
        <div style={{textAlign:"center", marginTop:"40px"}}>
            <h2>Controlled Component Example</h2>

            <form onSubmit={handelSubmit}>

                <input type="text" value={name} placeholder="Enter your name"
                onChange={(e)=>setName(e.target.value)}/>

                <button type="submit">Submit</button>

            </form>

            <p>Current Value : {name}</p>
        </div>
        </>
    )
}