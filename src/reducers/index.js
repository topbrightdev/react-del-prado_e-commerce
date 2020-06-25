import { combineReducers } from "redux";
import { IntlReducer as Intl, IntlProvider } from "react-redux-multilingual";

// Import custom components
import productReducer from "./products";
import cartReducer from "./cart";
import filtersReducer from "./filters";
import wishlistReducer from "./wishlist";
import compareReducer from "./compare";
import categoryTreeReducer from "./categoryTree";

const rootReducer = combineReducers({
  data: productReducer,
  data2: categoryTreeReducer,
  cartList: cartReducer,
  filters: filtersReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  Intl,
});

export default rootReducer;
