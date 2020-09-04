import { RECEIVE_PLACE, CLEAR_PLACE } from "../actions/place_actions";

const _nullState = null;

const placeReducer = (oldState = _nullState, action) => {
  switch (action.type) {
    case RECEIVE_PLACE:
      return action.place;
    case CLEAR_PLACE:
      return _nullState;
    default:
      return oldState;
  }
};

export default placeReducer;
