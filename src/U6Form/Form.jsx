import React, { useState } from "react";

export default function Form(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [age, setAge]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()  // prevent page refresh
        alert(`Name : ${name} \n Email : ${email} \n Age : ${age}`)
    }

    return(
        <>
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h2>Simple React Form</h2>

            <form onSubmit={handleSubmit}>
                <div style={{margin:"10px"}}>
                    <label>Name :  </label>
                    <input type="text" value={name} placeholder="Enter Your Name"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>

                  <div style={{margin:"10px"}}>
                    <label>Email :  </label>
                    <input type="email" value={email} placeholder="Enter Your Email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>


                  <div style={{margin:"10px"}}>
                    <label>Age :  </label>
                    <input type="number" value={age} placeholder="Enter Your Age"
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <button type="submit">Submit</button>
            </form>

            <div style={{marginTop:"20px"}}>
                <h3>Entered Data : </h3>
                <p><b>Name : </b> - {name}</p>
                <p><b>Email : </b> - {email}</p>
                <p><b>Age : </b> - {age}</p>
            </div>

        </div>
        </>
    )
}