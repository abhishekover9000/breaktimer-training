import React, { Component } from "react";

class ConfigTimer extends Component{
    state = {
        config: {},
        time:0,
        name: ""
      };
      submit = () => {
          this.setState({config:{name:this.state.name,time:this.state.time}})
        this.props.addConfig(this.state.config);
      };
render(){
    return(
        <div>
            config timer
        </div>
    )
}
}
export default ConfigTimer;