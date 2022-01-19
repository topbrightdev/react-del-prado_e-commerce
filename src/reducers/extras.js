import { RECEIVE_EXTRAS } from "../constants/ActionTypes";

const initialState = {
  extras: [],
};

const extrasReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EXTRAS:
      return {
        extras: action.extras,
      };

    default:
      return state;
  }
};
export default extrasReducer;
