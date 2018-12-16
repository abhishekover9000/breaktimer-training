import React, { Component } from "react";
import ConfigTimer from "./configTimer";
import Button from "@material-ui/core/Button";
import { addConfig } from "../actions/actions";
import { connect } from "react-redux";

class TimerContainer extends Component {
    state = {
        configPage: false,
        timerPage: true
    };
    configDisplay = () => {
        this.setState({ configPage: true, timerPage: false });
    };

    updateConfig = config => {
        if (config) {
            this.timerDisplay();
        }
    };
    timerDisplay = () => {
        this.setState({ configPage: false, timerPage: true });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.timerDisplay}
                    >
                        {" "}
                        Timer{" "}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.configDisplay}
                    >
                        {" "}
                        Config{" "}
                    </Button>
                </div>
                {this.props.config ? (
                    <div>{this.props.config.name},{this.props.config.time}</div>
                ) : null}
                {this.state.configPage ? (
                    <ConfigTimer updateConfig={this.updateConfig} />
                ) : null}
            </div>
        )
    }

}
export default connect(
    state => {
        return { config: state.config };
    }
)(TimerContainer);