import React from "react";

export default function ObjectValue(){
    const student={
        id:101,
        name:"Sridhar Raj P",
        course:"React JS + React Native",
        marks:80
    }

    return(
        <>
        <div>
            <p>Object Value - Ordered List</p>

            <ol>
                {
                    Object.entries(student).map(([key, value], index)=>(
                        <li key={index}> {key} - {value}</li>
                    ))
                }
            </ol>

            <ul>
                 {
                    Object.entries(student).map(([key, value], index)=>(
                        <li key={index}> {key} - {value}</li>
                    ))
                }
            </ul>

            <select>
                 {
                    Object.entries(student).map(([key, value], index)=>(
                        <option key={index}> {key} - {value}</option>
                    ))
                }
            </select>
        </div>
        </>
    )
}