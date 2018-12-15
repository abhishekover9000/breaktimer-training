import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/actions.js";

import Button from "@material-ui/core/Button";

import WeatherInfo from "./weatherInfo";

class WeatherContainer extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    return (
      <div>
        <h1> Weather Info </h1>

        {this.props.weather.callInProgress && <div> Getting Your Data.. </div>}
        {this.props.weather.info.coord && (
          <WeatherInfo data={this.props.weather.info} />
        )}
        {this.props.weather.weatherError && (
          <div> The signals are jammed! We will try again later. </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return { weather: state.weather };
  },
  { getWeather }
)(WeatherContainer);
