import React, { useState } from "react";

export default function ArrayValueDeleteFilter(){
    const [fruits, setFrusits]=useState(["Apple", "Banana", "Mango", "Orange"])

    const deleteFruit=(fruitToDelete)=>{
        setFrusits(fruits.filter((fruit)=> fruit!== fruitToDelete))
        // filter() creates a new array by keeping only items that match the condition
        // filter() removes the selected fruit by returing a new array withoout it
    }

    return(
        <>
        <div>
            <p>Delete Fruits (Filter Method)</p>
            <ol>
                {
                    fruits.map((fruit, index)=>(
                        <li key={index}>
                            {fruit} {" "}
                            <button onClick={()=>deleteFruit(fruit)}>Delete</button>
                        </li>
                    ))
                }
            </ol>
        </div>
        </>
    )
}