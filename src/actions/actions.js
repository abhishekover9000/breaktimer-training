import { actionTypes } from "./actionTypes";

// NEVER DO THIS IN PRODUCTION - keep as an environment variable
const WEATHER_API_KEY = "16be0f58725f612e0265b2ff572a7516";

export const addItem = payload => {
  return {
    type: actionTypes.ADD_ITEM,
    payload
  };
};

export const deleteItem = payload => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload
  };
};

export const completeItem = payload => {
  return {
    type: actionTypes.COMPLETE_ITEM,
    payload
  };
};

export const getWeather = payload => {
  // api.openweathermap.org/data/2.5/weather?zip=94040,us
  return async dispatch => {
    dispatch({
      type: actionTypes.GET_WEATHER,
      payload: null
    });

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=94538,us&units=imperial&APPID=${WEATHER_API_KEY}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors",

        method: "GET"
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: actionTypes.GET_WEATHER_SUCCESS, payload: json });
    } else dispatch({ type: actionTypes.GET_WEATHER_ERROR, payload: json });
  };
};
