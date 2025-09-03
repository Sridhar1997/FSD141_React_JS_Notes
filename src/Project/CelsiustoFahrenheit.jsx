import React, { useState } from "react";
import './CTF.css';

export default function CelsiustoFahrenheit(){
    const [celsius, setCelsius]=useState("")
    const [fahrenheit, setFahrenheit]=useState("")

    const HandleClear=()=>{
        setCelsius("")
        setFahrenheit("")
    }

    const convertTemp=()=>{
        if(celsius === "" || isNaN(celsius)){
            setFahrenheit("Input Input")
        }
        else{
            let f=(parseFloat(celsius)*9)/5+32
            setFahrenheit("Result : "+f.toFixed(2) + " °F")
        }
    }

    return(
        <>
        <div className="container1">
            <h2>Celsius to Fahrenheit Converter</h2>

            <input type="text" value={celsius} placeholder="Enter Celsius"
            onChange={(e)=>setCelsius(e.target.value)}/>

            <button onClick={convertTemp}>Convert</button> &nbsp;
            <button onClick={HandleClear} className="Clearbtn">Clear</button>

            <h3>{fahrenheit}</h3>
        </div>
        </>
    )
}