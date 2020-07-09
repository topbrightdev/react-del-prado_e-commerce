import shop from "../api/shop";
import user from "../api/user";
import * as types from "../constants/ActionTypes";
import store from "../store";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/**           PRODUCTS ACTIONS          */

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN,
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  dispatch(fetchProductsBegin());
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
    return products;
  });
};

export const fetchSingleProduct = (productId) => ({
  type: types.FETCH_SINGLE_PRODUCT,
  productId,
});

export const fetchSelectedProductsBegin = () => ({
  type: types.FETCH_SELECTEDPRODUCTS_BEGIN,
});

export const receiveSelectedProducts = (products) => ({
  type: types.RECEIVE_SELECTEDPRODUCTS,
  products,
});

export const addSelectedProducts = (selected) => (dispatch) => {
  dispatch(fetchSelectedProductsBegin());
  dispatch(receiveSelectedProducts(selected));
  return selected;
};

export const fetchSingleSelectedProduct = (productId) => ({
  type: types.FETCH_SINGLE_SELECTEDPRODUCT,
  productId,
});

export const searchProduct = (productName) => (
  console.log(productName),
  {
    type: types.SEARCH_PRODUCT,
    productName,
  }
);

/**      END  PRODUCTS ACTIONS          */

/**           CATEGORYTREE ACTIONS          */

export const fetchCategoryTreeBegin = () => ({
  type: types.FETCH_CATEGORYTREE_BEGIN,
});

export const fetchCategoryTree = (category) => ({
  type: types.FETCH_CATEGORYTREE,
  category,
});

export const receiveCategoryTree = (categoryTree) => ({
  type: types.RECEIVE_CATEGORYTREE,
  categoryTree,
});

export const getAllCategories = () => (dispatch) => {
  dispatch(fetchCategoryTreeBegin());
  shop.getCategoryTree().then((categoryTree) => {
    if (categoryTree) {
      dispatch(receiveCategoryTree(categoryTree));
      return categoryTree;
    }
  });
};

/**      END  CATEGORYTREE ACTIONS          */

/**          USER               */
export const fetchLoginBegin = () => ({
  type: types.FETCH_LOGIN_BEGIN,
});

export const fetchLogin = (log) => ({
  type: types.FETCH_LOGIN,
  log,
});

export const receiveLogin = (log) => ({
  type: types.RECEIVE_LOGIN,
  log,
});

export const login = (userData) => (dispatch) => {
  dispatch(fetchLoginBegin());
  user.login(userData).then((log) => {
    dispatch(receiveLogin(log));
    return log;
  });
};

export const signupBegin = () => ({
  type: types.SIGNUP_BEGIN,
});

export const receiveSignup = (log) => ({
  type: types.RECEIVE_SIGNUP,
  log,
});

export const signup = (userData) => (dispatch) => {
  dispatch(signupBegin());
  user.signup(userData).then((log) => {
    dispatch(receiveSignup(log));
    return log;
  });
};

export const receiveUpdatedAccount = (log) => ({
  type: types.RECEIVE_UPDATED_ACCOUNT,
  log,
});

export const updateAccount = (userData, userOldData) => (dispatch) => {
  user.updateAccount(userData, userOldData).then((log) => {
    dispatch(receiveUpdatedAccount(log));
    return log;
  });
};

/**            USER    END           */

/**             ORDER                */

export const orderBegin = () => ({
  type: types.ORDER_BEGIN,
});

export const receiveOrderReceipt = (rec) => ({
  type: types.RECEIVE_ORDER_RECEIPT,
  rec,
});

export const placeOrder = (orderData) => (dispatch) => {
  console.log(orderData);
  dispatch(orderBegin());
  user.order(orderData).then((rec) => {
    console.log(rec);
    dispatch(receiveOrderReceipt(rec));
    return rec;
  });
};

/**             ORDER    END            */

//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const addToCartAndRemoveWishlist = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
  dispatch(removeFromWishlist(product));
};
export const addToCartUnsafe = (product, qty) => ({
  type: types.ADD_TO_CART,
  product,
  qty,
});
export const removeFromCart = (product_id) => (dispatch) => {
  toast.error("Item Removed from Cart");
  dispatch({
    type: types.REMOVE_FROM_CART,
    product_id,
  });
};
export const incrementQty = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const decrementQty = (productId) => (dispatch) => {
  toast.warn("Item Decrement Qty to Cart");
  dispatch({
    type: types.DECREMENT_QTY,
    productId,
  });
};
export const clearCart = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_CART,
  });
};

//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product) => (dispatch) => {
  toast.success("Item Added to Wishlist");
  dispatch(addToWishlistUnsafe(product));
};
export const addToWishlistUnsafe = (product) => ({
  type: types.ADD_TO_WISHLIST,
  product,
});
export const removeFromWishlist = (product_id) => (dispatch) => {
  toast.error("Item Removed from Wishlist");
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    product_id,
  });
};

//Compare Products
export const addToCompare = (product) => (dispatch) => {
  toast.success("Item Added to Compare");
  dispatch(addToCompareUnsafe(product));
};

export const addToCompareUnsafe = (product) => ({
  type: types.ADD_TO_COMPARE,
  product,
});

export const removeFromCompare = (product_id) => ({
  type: types.REMOVE_FROM_COMPARE,
  product_id,
});

// Filters
export const filterBrand = (brand) => ({
  type: types.FILTER_BRAND,
  brand,
});
export const filterColor = (color) => ({
  type: types.FILTER_COLOR,
  color,
});
export const filterPrice = (value) => ({
  type: types.FILTER_PRICE,
  value,
});
export const filterSort = (sort_by) => ({
  type: types.SORT_BY,
  sort_by,
});

// Currency
export const changeCurrency = (symbol) => ({
  type: types.CHANGE_CURRENCY,
  symbol,
});
