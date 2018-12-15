import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./components/todoContainer";
import WeatherContainer from "./components/weatherContainer";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <WeatherContainer />
        <TodoContainer />
      </Provider>
    );
  }
}

export default App;
