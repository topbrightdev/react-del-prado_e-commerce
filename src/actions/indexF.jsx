import shop from "../api/shop";
import * as types from "../constants/ActionTypes";
import store from "../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/**           PRODUCTS ACTIONS          */

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN,
});

export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => dispatch => {
  dispatch(fetchProductsBegin());
  shop.getProducts().then(products => {
    dispatch(receiveProducts(products));
    return products;
  });
};

export const fetchSingleProduct = productId => ({
  type: types.FETCH_SINGLE_PRODUCT,
  productId,
});

/**      END  PRODUCTS ACTIONS          */

/**           CATEGORYTREE ACTIONS          */

export const fetchCategoryTreeBegin = () => ({
  type: types.FETCH_CATEGORYTREE_BEGIN,
});

export const receiveCategoryTree = categoryTree => ({
  type: types.RECEIVE_CATEGORYTREE,
  categoryTree,
});

export const getAllCategories = () => dispatch => {
  console.log(dispatch);
  dispatch(fetchCategoryTreeBegin());
  shop.getCategoryTree().then(categoryTree => {
    if (categoryTree) {
      console.log(categoryTree);
      dispatch(receiveCategoryTree(categoryTree));
      return categoryTree;
    }
  });
};

export const fetchCategoryTree = category => ({
  type: types.FETCH_CATEGORYTREE,
  category,
});

/**      END  CATEGORYTREE ACTIONS          */

//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product, qty) => dispatch => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const addToCartAndRemoveWishlist = (product, qty) => dispatch => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
  dispatch(removeFromWishlist(product));
};
export const addToCartUnsafe = (product, qty) => ({
  type: types.ADD_TO_CART,
  product,
  qty,
});
export const removeFromCart = product_id => dispatch => {
  toast.error("Item Removed from Cart");
  dispatch({
    type: types.REMOVE_FROM_CART,
    product_id,
  });
};
export const incrementQty = (product, qty) => dispatch => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const decrementQty = productId => dispatch => {
  toast.warn("Item Decrement Qty to Cart");

  dispatch({
    type: types.DECREMENT_QTY,
    productId,
  });
};

//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = product => dispatch => {
  toast.success("Item Added to Wishlist");
  dispatch(addToWishlistUnsafe(product));
};
export const addToWishlistUnsafe = product => ({
  type: types.ADD_TO_WISHLIST,
  product,
});
export const removeFromWishlist = product_id => dispatch => {
  toast.error("Item Removed from Wishlist");
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    product_id,
  });
};

//Compare Products
export const addToCompare = product => dispatch => {
  toast.success("Item Added to Compare");
  dispatch(addToCompareUnsafe(product));
};
export const addToCompareUnsafe = product => ({
  type: types.ADD_TO_COMPARE,
  product,
});
export const removeFromCompare = product_id => ({
  type: types.REMOVE_FROM_COMPARE,
  product_id,
});

// Filters
export const filterBrand = brand => ({
  type: types.FILTER_BRAND,
  brand,
});
export const filterColor = color => ({
  type: types.FILTER_COLOR,
  color,
});
export const filterPrice = value => ({
  type: types.FILTER_PRICE,
  value,
});
export const filterSort = sort_by => ({
  type: types.SORT_BY,
  sort_by,
});

// Currency
export const changeCurrency = symbol => ({
  type: types.CHANGE_CURRENCY,
  symbol,
});
