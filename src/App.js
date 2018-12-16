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

class App extends Component {
  state = {
    configPage: false
  };
addItemToggle = () => {
    this.setState({ configPage: true });
  };

  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <Button
            variant="contained"
            color="primary"
            onClick={this.addItemToggle}
          >
            {" "}
            Config{" "}
          </Button>
        
        {this.state.configPage ? (
          <ConfigTimer/>
        ) : null}
      </Provider>
    );
  }
}

export default App;
