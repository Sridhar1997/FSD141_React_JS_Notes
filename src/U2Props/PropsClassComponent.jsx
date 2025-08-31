import React from "react";

class PropsClassComponent extends React.Component{
    render(){
        return(
            <>
            <p>Name - {this.props.name}  Role - {this.props.role}</p>
            </>
        )
    }
}

export default PropsClassComponent