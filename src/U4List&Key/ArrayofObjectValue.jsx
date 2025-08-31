import React from "react";

export default function ArrayofObjectValue(){
    const students=[
        {id:1, name:"Sridhar", course:"React JS", marks:80},
        {id:2, name:"Sasi", course:"Angular JS", marks:70},
        {id:3, name:"Abi", course:"VUE JS", marks:60},
        {id:4, name:"Kumar", course:"PHP", marks:80},
        {id:5, name:"Priya", course:"JS", marks:90}
    ]

    return(
        <>
        <div>
            <p>Array of Objects Value - Ordered List </p>

            <ol>
                {
                    students.map((s)=>(
                        <li key={s.id}>
                            {s.id} - {s.name} - {s.course} - {s.marks}
                        </li>
                    ))
                }
            </ol>
        </div>
        </>
    )
}