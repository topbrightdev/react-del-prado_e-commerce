import { RECEIVE_ORDER_RECEIPT, PLACE_ORDER } from "../constants/ActionTypes";

const initialState = {
  orderData: [],
  rec: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orderData: action.orderData,
      };
    case RECEIVE_ORDER_RECEIPT:
      return {
        orderData: [],
        rec: action.rec,
      };
    default:
      return state;
  }
};

export default orderReducer;
