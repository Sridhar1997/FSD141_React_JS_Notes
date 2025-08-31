import React from "react";

class StateClassComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={message:"Welcome to Credo Systemz"}
    }

    ChangeContent=()=>{
        this.setState({message:"Thank to Visit Credo Systemz"})
    }

    ResetContent=()=>{
        this.setState({message:"Welcome to Credo Ssytemz "})
    }

    render(){
        return(
            <>
            <p>Class Component - State </p>
            <p>State Value - {this.state.message}</p>
            <label>
            <button onClick={this.ChangeContent}>Change Content</button>
            <button onClick={this.ResetContent}>Reset Content</button>
            </label>
            </>
        )
    }

}
export default StateClassComponent