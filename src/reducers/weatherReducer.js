import { actionTypes } from "../actions/actionTypes";

const weather = (
  state = {
    info: {},
    callInProgress: false,
    weatherError: false
  },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER:
      return Object.assign({}, state, {
        callInProgress: true
      });
    case actionTypes.GET_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        info: action.payload,
        callInProgress: false,
        weatherError: false
      });
    case actionTypes.GET_WEATHER_ERROR:
      return Object.assign({}, state, {
        callInProgress: false,
        weatherError: true
      });
    default:
      return state;
  }
};

export default weather;
