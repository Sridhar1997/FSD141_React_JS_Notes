// splice() modifies the original array. so we must create a copy before updating state
// splice() directly removes an element by index

import React, {useState} from "react";

export default function ArrayValueDeleteSplice(){
     const [fruits, setFrusits]=useState(["Apple", "Banana", "Mango", "Orange"])

     const deleteFruit=(index)=>{
        let updatedFruits=[...fruits]  // Copy Array
        console.log(updatedFruits)
        updatedFruits.splice(index, 1) // Remove item at index 
        setFrusits(updatedFruits)

     }

     return(
        <>
        <div>
            <p>Delete Fruits (Splice Method)</p>
            <ol>
               {fruits.map((fruit, index)=>(
                <li key={index}>
                    {fruit} {" "}
                    <button onClick={()=>deleteFruit(index)}>Delete</button>
                </li>
               ))}
            </ol>
        </div>
        </>
     )
}