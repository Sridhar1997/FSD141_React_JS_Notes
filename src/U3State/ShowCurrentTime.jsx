import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";

export default function ShowCurrentTime(){
    const [time, setTime]=useState(null)
    const [date, setDate]=useState(null)

    return(
        <>
        <div>
            <h2><BiAlarm /> {time}</h2>
            <button onClick={()=>setTime(new Date().toLocaleTimeString())}> <BiBell />   Update Time</button>
            <h2><BiAlarm /> {date}</h2>
            <button onClick={()=>setDate(new Date().toLocaleDateString())}><BiBell /> Update Date</button>
        </div>
        </>
    )
}