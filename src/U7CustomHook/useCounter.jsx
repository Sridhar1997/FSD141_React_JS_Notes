// What is a Custom Hook? 

// A custom hook is just a JavaScript function that starts with use and uses React Hooks (useState(), useRef()
// useEffect(),... etc)  inside it 
// They allow you to reuse logic across components
// Naming convention:must start with use (like useCounter(), useFetch(), useForm())

import React, { useState } from "react";

export default function useCounter(initialValue=0){
    const [count, setCount]=useState(initialValue)

    const increment=()=>setCount(count+1)
    const decrement=()=>setCount(count-1)
    const reset=()=>setCount(initialValue)

    return {count, increment, decrement, reset}
}