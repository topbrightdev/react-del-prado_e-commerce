import {
  RECEIVE_LOGIN,
  FETCH_LOGIN,
  RECEIVE_SIGNUP,
  RECEIVE_UPDATED_ACCOUNT,
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

    case RECEIVE_SIGNUP: {

      if (action.log !== undefined) {
        return {
          log: action.log,
        };
      }
    }

    case RECEIVE_UPDATED_ACCOUNT: {
      if (action.log !== undefined) {
        alert("Your account has been updated succesfully");
        return {
          log: action.log,
        };
      } else {
        alert("There has been a problem with the upload process");
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
