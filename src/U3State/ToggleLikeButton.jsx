import React, { useState } from "react";

export default function ToggleLikeButton(){
    const [liked, setLiked]=useState(false)

    return(
        <>
        <button onClick={()=>setLiked(!liked)}>
            {
                liked ?  "❤️"  : "🤍"
            }
        </button>
        </>
    )
}