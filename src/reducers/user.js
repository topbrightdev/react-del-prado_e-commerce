import {
  FETCH_LOGIN_BEGIN,
  RECEIVE_LOGIN,
  FETCH_LOGIN,
  SIGNUP_BEGIN,
  RECEIVE_SIGNUP,
} from "../constants/ActionTypes";

const initialState = {
  log: "empty",
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

    case RECEIVE_SIGNUP: {
      if (action.log !== undefined) {
        return {
          ...state,
          log: action.log,
        };
      }
    }

    default:
      return state;
  }
};
export default userReducer;
