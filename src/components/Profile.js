import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props)
        console.log("child_constructor"+this.props.name)
    }
    
    componentDidMount(){
        console.log("child_componentDidMount"+this.props.name)
    }


    render(){
        console.log("child_render"+ this.props.name)
        return(
            <>
            <div>This is a Profile Page using class Based Component</div>
            <div><h1>Name : {this.props.name}</h1></div>
            </>
        )
    }
}

export default Profile;