// External CSS - (Global CSS File)
//  you create a sparate CSS file and import it into your component 

import React from "react";
import './ExternalCSS.css';

export default function ExternalCSS(){
    return(
        <>
        <div>
            <h2 className="title">External CSS Example</h2>
            <p className="text">This is Styled using an External CSS File</p>
        </div>
        </>
    )
}