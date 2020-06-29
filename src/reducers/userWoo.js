import {FETCH_USERWOO, RECEIVE_USERWOO} from "../constants/ActionTypes";

const initialState = {
  userWoo: "initial",
};

const userWooReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USERWOO:
      return {
        ...state,
        userWoo: action.userWoo,
      };
    case FETCH_USERWOO:
      return {
        ...state,
        userWoo: action.userWoo,
      };

    default:
      return state;
  }
};
export default userWooReducer;
