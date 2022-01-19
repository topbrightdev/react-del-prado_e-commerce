import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import CartPage from "../components/headers/common/cart-header";
import { removeFromCart } from "../actions/indexO";
import { getCartTotal } from "../services";
import Cart from "../icons/Cart";

const CartContainer = ({ cartList, total, symbol, removeFromCart }) => (
  <li className="onhover-div mobile-cart">
    <div className="cart-qty-cls"> {cartList.length} </div>
    <Link to={`${process.env.PUBLIC_URL}/cart`}>
      <Cart className="img-fluid" />
    </Link>
    <ul className="show-div shopping-cart">
      {" "}
      {cartList.map((item, index) => (
        <CartPage
          key={index}
          item={item}
          total={total}
          symbol={symbol}
          removeFromCart={() => removeFromCart(item)}
        />
      ))}{" "}
      {cartList.length > 0 ? (
        <div>
          <li>
            <div className="total">
              {" "}
              subtotal:{" "}
              <NumberFormat
                value={total}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
                renderText={(formattedValue) => (
                  <h5 className="td-color">
                    <span>{formattedValue}</span>
                  </h5>
                )} // <--- Don't forget this!
              />
            </div>{" "}
          </li>{" "}
          <li>
            <div className="buttons">
              <Link to={`${process.env.PUBLIC_URL}/cart`} className="view-cart">
                {" "}
                view cart{" "}
              </Link>{" "}
              <Link
                to={`${process.env.PUBLIC_URL}/checkout`}
                className="checkout"
              >
                {" "}
                checkout{" "}
              </Link>{" "}
            </div>{" "}
          </li>
        </div>
      ) : (
        <li>
          {" "}
          <h5> Your cart is currently empty. </h5>
        </li>
      )}{" "}
    </ul>
  </li>
);

function mapStateToProps(state) {
  return {
    cartList: state.cartList.cart,
    total: getCartTotal(state.cartList.cart),
    symbol: state.data.symbol,
  };
}

export default connect(
  mapStateToProps,
  {
    removeFromCart,
  }
)(CartContainer);
