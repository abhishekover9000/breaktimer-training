import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./components/todoContainer";
import WeatherContainer from "./components/weatherContainer";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ConfigTimer from "./components/configTimer";
import Button from "@material-ui/core/Button";
import { addConfig } from "./actions/actions";
import { connect } from "react-redux";

class App extends Component {
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
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
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
      </Provider>
    );
  }
}

export default connect(
  state => {
    return { config: state.config };
  },
  { addConfig }
)(App);
