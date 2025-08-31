import React from "react";

class P1CounterApp extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }

    Increment=()=>{
        this.setState({count:this.state.count+1})
    }

    Decrement=()=>{
        this.setState({count:this.state.count-1})
    }

    Reset=()=>{
        this.setState({count:0})
    }

    render(){
        return(
            <>
            <p>Counter App using Class Component</p>
            <p>Count Value - {this.state.count}</p>

            <label>
                <button onClick={this.Increment}>+</button>
                <button onClick={this.Reset}>Reset</button>
                <button onClick={this.Decrement}>-</button>
            </label>
            </>
        )
    }
}
export default P1CounterApp