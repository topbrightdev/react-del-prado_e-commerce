import {
  FETCH_SINGLE_SELECTEDPRODUCT,
  RECEIVE_SELECTEDPRODUCTS,
  CHANGE_CURRENCY,
} from "../constants/ActionTypes";

const initialState = {
  symbol: "$",
  product_details: [],
};

const productsToShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SELECTEDPRODUCTS:
      return {
        ...state,
        productsToShow: action.products,
      };

    case FETCH_SINGLE_SELECTEDPRODUCT:
      if (
        state.productsToShow.findIndex(
          (product) => product.id === action.productId
        ) !== -1
      ) {
        const singleItem = state.productsToShow.reduce((itemAcc, product) => {
          return product;
        }, []);
        return {
          ...state,
          product_details: singleItem,
        };
      }
      break;

    case CHANGE_CURRENCY:
      return {
        ...state,
        symbol: action.symbol,
      };

    default:
      return state;
  }
};
export default productsToShowReducer;
