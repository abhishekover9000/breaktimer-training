import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class TimerContainer extends Component {
  state = {
    hrs: '',
    mins:'',
    secs:'',
  }

  handleHours = (e) => {
  
    this.setState({ hrs: Number(e.target.value * 3600) });
  const hsecs =  e.target.value *3600;
  console.log(hsecs);
    
  };
  handleMinutes = e => {
    this.setState({ mins: Number(e.target.value * 60) });

    console.log("seconds is ", e.target.value *60);
   
  };
  handleSeconds = e => {
    this.setState({ secs: Number(e.target.value) });
    console.log(e.target.value); 
  };
  handleStart= () =>{
    const total = Number (this.state.hrs + this.state.mins +this.state.secs);
    console.log(total);

  }


calSeconds =()=>{

}



  render(){
      return(
<div>

     <TextField
         
          label="Hours"
          value={this.state.value}
          onChange={this.handleHours}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
     
        <TextField
 
          label="Minutes"
          value={this.state.value}
        onChange={this.handleMinutes}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
         
          label="Seconds"
          value={this.state.value}
          onChange={this.handleSeconds}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <br/>
        <Button color="primary" onClick = {this.handleStart}>
        Start Timer
      </Button>

    </div>


      );
  }
}

  export default TimerContainer;