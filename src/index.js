import React, { Component } from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";

class App extends Component {
  
  state = {
    lat: null,
    errMassage : ""
  };
    
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat : position.coords.latitude})
      },
      (err) => {
        this.setState({errMassage : err.message})
         }
    )
  }

  render() {
   if(this.state.errMassage){
   return <div> Error : {this.state.errMassage}</div>;
   }
   if(this.state.lat){
    return <SeasonDisplay lat= {this.state.lat} />
    }
  return <Spinner massage = "Please accept the location request"/>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
