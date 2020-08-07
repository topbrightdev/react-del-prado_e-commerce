import {
  FETCH_SINGLE_PRODUCT,
  CHANGE_CURRENCY,
  RECEIVE_PRODUCTS,
  SEARCH_PRODUCT,
} from "../constants/ActionTypes";

const initialState = {
  products: [],
  symbol: "$",
  product_details: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      console.log(action.products);
      return {
        ...state,
        products: action.products,
      };

    case FETCH_SINGLE_PRODUCT:
      if (
        state.products.findIndex(
          (product) => product.id === action.productId
        ) !== -1
      ) {
        const singleItem = state.products.reduce((itemAcc, product) => {
          return product;
        }, []);
        return {
          ...state,
          product_details: singleItem,
        };
      }
      break;

    case SEARCH_PRODUCT:
      var item = {};
      state.products.map((product) => {
        var thisName = product.name.toUpperCase();
        var receivedName = action.productName.toUpperCase();
        if (thisName.includes(receivedName)) {
          return (item = product);
        } else return null;
      });

      if (item.name) {
        console.log(item);
        return {
          ...state,
          product_details: item,
        };
      } else
        return {
          ...state,
          product_details: "notFound",
        };

    case CHANGE_CURRENCY:
      return {
        ...state,
        symbol: action.symbol,
      };
    default:
      return state;
  }
};
export default productReducer;
