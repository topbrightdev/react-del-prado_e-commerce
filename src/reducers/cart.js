import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT_QTY,
  CLEAR_CART,
} from "../constants/ActionTypes";

export default function cartReducer(
  state = {
    cart: [],
  },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;
      if (state.cart.findIndex((product) => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === productId) {
            var thisPrice = parseFloat(product.price).toFixed(2);
            thisPrice = thisPrice * 100;
            var thisTotal = thisPrice * (product.qty + 1);
            thisTotal = thisTotal / 100;
            thisTotal = thisTotal.toFixed(2);
            cartAcc.push({
              ...product,
              qty: product.qty + 1,
              sum: thisTotal,
            }); // Increment qty
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);
        return { ...state, cart };
      } else {
        var product = action.product;
        var thisPrice = parseFloat(product.price).toFixed(2);
        thisPrice = thisPrice * 100;
        var thisTotal = thisPrice * action.qty;
        thisTotal = thisTotal / 100;
        thisTotal = thisTotal.toFixed(2);

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.product,
              qty: action.qty,
              sum: thisTotal,
            },
          ],
        };
      }

    case DECREMENT_QTY:
      if (
        state.cart.findIndex((product) => product.id === action.productId) !==
        -1
      ) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === action.productId && product.qty > 1) {
            var thisPrice = parseFloat(product.price).toFixed(2);
            thisPrice = thisPrice * 100;
            var thisTotal = thisPrice * (product.qty - 1);
            thisTotal = thisTotal / 100;
            thisTotal = thisTotal.toFixed(2);

            cartAcc.push({
              ...product,
              qty: product.qty - 1,
              sum: thisTotal,
            }); // Decrement qty
          } else if (product.id === action.productId && product.qty === 1) {
            cartAcc = state.cart;
            var index = cartAcc.indexOf(product);
            if (index !== -1) {
              cartAcc.splice(index, 1);
            }
            return cartAcc;
          }
          return cartAcc;
        }, []);

        return { ...state, cart };
      } else {
        thisPrice = null;
        thisPrice = parseFloat(product.price).toFixed(2);
        thisPrice = thisPrice * 100;
        thisTotal = null;
        thisTotal = thisPrice * (product.qty - 1);
        thisTotal = thisTotal / 100;
        thisTotal = thisTotal.toFixed(2);

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.product,
              qty: action.qty,
              sum: thisTotal,
            },
          ],
        };
      }
    case CLEAR_CART:
      return {
        cart: [],
      };

    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.product_id.id),
      };

    default:
  }
  return state;
}
