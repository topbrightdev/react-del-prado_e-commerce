import {
  RECEIVE_LOGIN,
  FETCH_LOGIN,
  RECEIVE_SIGNUP,
  RECEIVE_UPDATED_ACCOUNT,
  LOGOUT,
} from "../constants/ActionTypes";

const initialState = {
  log: "empty",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return {
        log: action.log,
      };

    case FETCH_LOGIN:
      return {
        log: action.log,
      };

    case LOGOUT:
      return {
        log: action.log,
      };

    case RECEIVE_SIGNUP:
      if (action.log !== undefined) {
        return {
          log: "empty",
        };
      }

      break;

    case RECEIVE_UPDATED_ACCOUNT: {
      if (action.log !== undefined) {
        return {
          log: action.log,
        };
      } else {
        return {
          log: action.log,
        };
      }
    }

    default:
      return state;
  }
};
export default userReducer;
