import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class TimerContainer extends Component {
  state = {
    hrs: '',
    mins: '',
    secs: '',
    isInTimer: false,

  }
  handleHours = (e) => {

    this.setState({ hrs: Number(e.target.value * 3600) });
    const hsecs = e.target.value * 3600;
    console.log(hsecs);

  };
  handleMinutes = e => {
    this.setState({ mins: Number(e.target.value * 60) });
    console.log("seconds is ", e.target.value * 60);

  };
  handleSeconds = e => {
    this.setState({ secs: Number(e.target.value) });
    console.log(e.target.value);
  };
  handleStart = () => {
    const total = Number(this.state.hrs + this.state.mins + this.state.secs);
    this.setState({ isInTimer: true });
    console.log(total);
  }
  handleRestart = () => {
    this.setState({ isInTimer: false });
  }
  render() {
    return (
      <div>
        {!this.state.isInTimer ?
          <React.Fragment>
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
            <br />
            {this.state.hrs > 0 || this.state.mins > 0 || this.state.secs > 0 ?
              <React.Fragment><Button color="primary" onClick={this.handleStart} >
                Start Timer
      </Button> </React.Fragment> : <p><b>Enter values to start timer</b></p>

            }
          </React.Fragment>
          :
          <React.Fragment>
            <p>Remaining Hours       Minutes            Seconds</p>
            <Button color="primary">Pause</Button>
            <Button color="primary" onClick={this.handleRestart}>Restart</Button>
          </React.Fragment>
        }
      </div>
    );
  }
}
export default TimerContainer;
