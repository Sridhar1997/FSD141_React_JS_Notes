import React from "react";

export default function ArrayValue(){
    const fruits=["Apple", "Banana", "Mango", "Orange", "PineApple"]

    return(
        <>
        <p>Select - Array Value (Dropdown)</p>
        <select>
            <option>Please Select any One </option>
            {
                fruits.map((fruit, index)=>(
                    <option key={index} value={fruit}>{fruit}</option>
                ))
            }
        </select>
        <p>Table - Array Value</p>
        <table border={1} cellPadding={5} cellSpacing={2}>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Fruit</th>
                </tr>
            </thead>
            <tbody>
                {
                    fruits.map((fruit, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{fruit}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <p>Unordered List - Array Value</p>
        <ul>
            {
                fruits.map((fruit, index)=>(
                    <li key={index}>{fruit}</li>
                ))
            }
        </ul>
        <p>Ordered List - Array Value</p>
        <ol>
            {
                fruits.map((fruit, index)=>(
                    <li key={index}>{fruit}</li>
                ))
            }
        </ol>
        </>
    )
}