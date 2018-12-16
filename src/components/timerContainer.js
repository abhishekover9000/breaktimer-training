import React, { Component } from "react";
import ConfigTimer from "./configTimer";
import Button from "@material-ui/core/Button";
import { addConfig } from "../actions/actions";
import { connect } from "react-redux";

class TimerContainer extends Component {
    state = {
        configPage: false
    };
    addConfigToggle = () => {
        this.setState({ configPage: true });
    };
    addConfig = config => {
        /* Redux */ this.props.addConfig(config);
        this.setState({ configPage: false });
    };
    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.addConfigToggle}
                >
                    {" "}
                    Config{" "}
                </Button>

                {/* {this.props.config ? (
                    <div>{this.props.config.name},{this.props.config.time}</div>
                ) : null} */}
                {this.state.configPage ? (
                    <ConfigTimer />
                ) : null}
            </div>
        )
    }

}
export default connect(
    state => {
        return { config: state.config };
    },
    { addConfig }
)(TimerContainer);