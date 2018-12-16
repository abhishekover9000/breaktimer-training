import { actionTypes } from "../actions/actionTypes";
import converters from '../Util/timeConverts';

const { convertSecs } = converters;


export default function (state = {
  display: {hrs: 0, mins: 0, secs: 0},
  countSecs: 0,
  isPause: false,
  isInTimer: false,
}, action) {
  switch (action.type) {
    case actionTypes.START:
      const newState = state;
      state.countSecs = action.payload;
      state.isInTimer = true;
      state.display = convertSecs(action.payload);

      return Object.assign({}, state, newState);
    case actionTypes.PAUSE:
      const newState = state;
      state.isPause = true;

      return Object.assign({}, state, newState)
    case actionTypes.RESUME:
      const newState = state;
      state.isPause = false;

      return Object.assign({}, state, newState)
    case actionTypes.RESET:
      const newState = state;
      state.isInTimer = false;

      return Object.assign({}, state, newState)
    case actionTypes.DECREMENT:
      const newState = state;
      state.display = convertSecs(action.payload);
      state.countSecs = action.payload;

      return Object.assign({}, state, newState)
    default:
      return state;
   }
}
