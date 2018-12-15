import React, { Component } from "react";
class WeatherInfo extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.weather && (
          <p>
            {" "}
            The weather today in {data.name} can be described as{" "}
            {data.weather[0].description}{" "}
          </p>
        )}
        {data.main && (
          <React.Fragment>
            <p> Min: {data.main.temp_min} </p>
            <p> Max: {data.main.temp_max} </p>
            <p> Humidity: {data.main.humidity} </p>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default WeatherInfo;
