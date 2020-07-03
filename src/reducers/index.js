import {combineReducers} from "redux";
import {IntlReducer as Intl, IntlProvider} from "react-redux-multilingual";

// Import custom components
import productReducer from "./products";
import productsToShowReducer from "./productsToShow";
import cartReducer from "./cart";
import filtersReducer from "./filters";
import wishlistReducer from "./wishlist";
import compareReducer from "./compare";
import categoryTreeReducer from "./categoryTree";
import userWooReducer from "./userWoo";
import userReducer from "./user";
import orderReducer from "./order";
import {DESTROY_SESSION} from "../constants/ActionTypes";

// Combine all reducers.
const appReducer = combineReducers({
  data: productReducer,
  data2: categoryTreeReducer,
  data3: productsToShowReducer,
  cartList: cartReducer,
  filters: filtersReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  woo: userWooReducer,
  user: userReducer,
  order: orderReducer,
  Intl,
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
