import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "../constants/ActionTypes";

export default function cartReducer(
  state = {
    cart: [],
  },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      const productId = action.product.id;
      if (state.cart.findIndex((product) => product.id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === productId) {
            var thisPrice = parseInt(product.price);
            var thisTotal = thisPrice * (product.qty + 1);
            thisTotal = (thisTotal * 100) / 100;

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
        return {...state, cart};
      } else {
        var product = action.product;
        var thisPrice = parseInt(product.price);
        var thisTotal = thisPrice * action.qty;
        thisTotal = (thisTotal * 100) / 100;

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
            var thisPrice = parseInt(product.price);
            var thisTotal = thisPrice * (product.qty - 1);
            thisTotal = (thisTotal * 100) / 100;

            cartAcc.push({
              ...product,
              qty: product.qty - 1,
              sum: thisTotal,
            }); // Decrement qty
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);

        return {...state, cart};
      } else {
        var product = action.product;
        var thisPrice = parseInt(product.price);

        var thisTotal = thisPrice * (product.qty - 1);
        thisTotal = (thisTotal * 100) / 100;

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

    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.product_id.id),
      };

    default:
  }
  return state;
}
