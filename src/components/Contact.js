import React from "react";
import Profile from "./Profile";

class Contact extends React.Component{

  constructor(props){
    super(props)

    this.state={
      count:0,
    }
    console.log("parent_Constructor")
  }

  componentDidMount(){
    console.log("parent_componentDidMount")
  }
  
  render(){
    console.log("parent_render")
    return(
      <>
      <div>Contact Page Using Class Based Component</div>
      <div>Count : {this.state.count}</div>
      <button onClick={()=> this.setState({
        count:10,
      })
      }>Click</button>
      <Profile name="parvez" />
      </>
    )
  }
}
export default Contact;
