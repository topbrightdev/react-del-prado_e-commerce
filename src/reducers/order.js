import {RECEIVE_ORDER_RECEIPT, PLACE_ORDER} from "../constants/ActionTypes";

const initialState = {
  orderData: [],
  rec: [],
};

const orderReducer = (state = initialState, action) => {
  //console.log(state);
  //console.log(action);
  switch (action.type) {
    case PLACE_ORDER:
      console.log(state);
      console.log(action);
      return {
        ...state,
        orderData: action.orderData,
      };
    case RECEIVE_ORDER_RECEIPT:
      console.log(state);
      console.log(action);
      return {
        orderData: [],
        rec: action.rec,
      };
    default:
      return state;
  }
};

export default orderReducer;
