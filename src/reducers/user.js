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
  console.log(action.type);
  switch (action.type) {
    case RECEIVE_LOGIN:
      console.log(action.log);
      return {
        log: action.log,
      };
    case FETCH_LOGIN:
      console.log(action.log);
      return {
        log: action.log,
      };

    case RECEIVE_SIGNUP: {
      console.log(action.log);

      if (action.log !== undefined) {
        return {
          log: action.log,
        };
      }
    }

    case RECEIVE_UPDATED_ACCOUNT: {
      console.log(action.log);

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
      console.log(action);
      console.log(state);
      return state;
  }
};
export default userReducer;
