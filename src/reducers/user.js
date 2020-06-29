import {
  FETCH_LOGIN_BEGIN,
  RECEIVE_LOGIN,
  FETCH_LOGIN,
} from "../constants/ActionTypes";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return {
        ...state,
        log: action.log,
      };
    case FETCH_LOGIN:
      return {
        ...state,
        log: action.log,
      };

    default:
      return state;
  }
};
export default userReducer;
