import React, { Component } from "react";
import ConfigTimer from "../components/configTimer";
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

                {this.state.configPage ? (
                    <ConfigTimer addConfig={this.addConfig} />
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