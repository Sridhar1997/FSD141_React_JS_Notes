import React, { useState } from "react";

function InputBox(){
    const [text, setText]=useState("")

    return(
        <>
        <div>
            {/* <input type="text" value={text} placeholder="Type Something...." 
            onChange={(event)=>setText(event.target.value)}/>

            <p>You Typed : {text}</p> */}


            <textarea value={text} placeholder="Type Something" 
            onChange={(e)=>setText(e.target.value)}/>

            <p>You Typed : {text} </p>
            <p>Characters : {text.length}</p>
            <p>Upper Case : {text.toUpperCase()}</p>
        </div>
        </>
    )

}
export default InputBox