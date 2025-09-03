// Uncontrolled Components - Form elements store then own state internally (like plain HTML)
// you use ref to directly access the DOM value value instead of React State 
// useful for quick forms or when integrating when non-react libraries 

import React, { useRef } from "react";

export default function UncontrolledForm(){
    const nameinputRef=useRef()
    const emailinputRef=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Uncontrolled Form Value : ${nameinputRef.current.value} Email Value : ${emailinputRef.current.value}`)
    }

    return(
        <>
        <div style={{textAlign:"center", marginTop:"40px"}}>
            <h2>Uncontrolled Component Example</h2>

            <form onSubmit={handleSubmit}>
                <input  type="text" ref={nameinputRef} placeholder="Enter your name"/>
                 <input  type="text" ref={emailinputRef} placeholder="Enter your email"/>

                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}