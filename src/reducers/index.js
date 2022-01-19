import { combineReducers } from "redux";
import { IntlReducer as Intl } from "react-redux-multilingual";

// Import custom components
import productReducer from "./products";
import productsToShowReducer from "./productsToShow";
import cartReducer from "./cart";
import filtersReducer from "./filters";
import wishlistReducer from "./wishlist";
import compareReducer from "./compare";
import categoryTreeReducer from "./categoryTree";
import userReducer from "./user";
import orderReducer from "./order";
import reviewsReducer from "./reviews";
import extras from "./extras";

import { DESTROY_SESSION } from "../constants/ActionTypes";
import extrasReducer from "./extras";

// Combine all reducers.
const appReducer = combineReducers({
  data: productReducer,
  data2: categoryTreeReducer,
  data3: productsToShowReducer,
  cartList: cartReducer,
  filters: filtersReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  user: userReducer,
  order: orderReducer,
  reviews: reviewsReducer,
  extras: extrasReducer,
  Intl,
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
