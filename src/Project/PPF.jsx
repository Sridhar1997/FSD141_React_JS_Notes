import React, {useState} from "react";

export default function PPF(){
    const [amount, setAmount]=useState("")
    const [maturity, setMaturity]=useState(null)
    const [error, setError]=useState("");

    const rate=0.071; // 7.1% PPF Interest Rate 
    const time=15; // 15 Years
    const n=1;   // Compounded Annualty 

    const handleSubmit=(e)=>{
        e.preventDefault()
        const p=Number(amount)

        if(p<500 || p>150000){
            setError("Amount must be between RS 5,00 and RS 1,50,000")
            setMaturity(null)
        }
        else{
            setError("")
            const maturityAmount=p*(((Math.pow(1+rate, time)-1)/rate)*(1+rate))
            setMaturity(maturityAmount.toFixed(2))
        }
    }

    return(
        <>
        <div className="container mt-3">
            <h2 className="text-center">PPF Calculator</h2>

            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">

                <div className="mb-3">
                    <label className="form-label">Yearly Deposit Amount (RS) : </label>

                    <input type="number" className="form-control" placeholder="Enter between 500 and 150000"
                    value={amount} onChange={(e)=>setAmount(e.target.value)} required/>

                    <br/>

                    <button type="submit" className="btn btn-primary">Calculate</button>
                </div>

                {
                    error && <p className="mt-3 text-danger">{error}</p>
                }

                {
                    maturity &&(
                        <div className="alert alert-success mt-3">
                            <h5>Maturity Amount after 15 Years : </h5>
                            <strong>RS - {maturity}</strong>
                        </div>
                    )
                }

            </form>
        </div>
        </>
    )
}