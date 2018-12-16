import { actionTypes } from "./actionTypes";

export const start = seconds => {
  return {
    type: actionTypes.START,
    payload: seconds,
  };
};

export const pause = () => {
  return {
    type: actionTypes.PAUSE,
    payload: null,
  };
};

export const resume = () => {
  return {
    type: actionTypes.RESUME,
    payload: null,
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
    payload: null,
  };
}