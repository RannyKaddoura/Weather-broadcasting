import { FETCH_WEATHER } from '../actions/actions';

export default function (state = [], action) {
  // console.log("Action recived ", action);
  switch (action.type) {
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ]; // return state.concat([action.payload.data]);
  }

  return state;
}