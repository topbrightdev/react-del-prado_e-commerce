import React from "react";
import { Link } from "react-router-dom";

const CartHeader = ({ item, symbol, removeFromCart }) => (
  <li>
    <div className="media">
      <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>
        <img alt="" className="mr-3" src={`${item.pictures[0]}`} />
      </Link>
      <div className="media-body">
        <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>
          <h4>{item.name}</h4>
        </Link>
        <h4>
          <span>
            {item.qty} x {symbol} {item.price + " €"}
          </span>
        </h4>
      </div>
    </div>
    {/*<span>{cart}</span>*/}
    <div className="close-circle">
      <button className="invisible-button" onClick={removeFromCart}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>
    </div>
  </li>
);

export default CartHeader;
