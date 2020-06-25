import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Breadcrumb from "../common/breadcrumb";
import { getCartTotal } from "../../services";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../actions/index";

class cartComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cartItems, symbol, total } = this.props;
    return (
      <div>
        {/*SEO Support*/}
        <Helmet>
          <title>MultiKart | Cart List Page</title>
          <meta
            name="description"
            content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses."
          />
        </Helmet>
        {/*SEO Support End */}

        <Breadcrumb title={"Cart Page"} />

        {cartItems.length > 0 ? (
          <section className="cart-section section-b-space">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">action</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    {cartItems.map((item, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <Link
                                to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}
                              >
                                <img
                                  src={
                                    item.variants
                                      ? item.variants[0].images
                                      : item.pictures[0]
                                  }
                                  alt=""
                                />
                              </Link>
                            </td>
                            <td>
                              <Link
                                to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}
                              >
                                {item.name}
                              </Link>
                              <div className="mobile-cart-content row">
                                <div className="col-xs-3">
                                  <div className="qty-box">
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        name="quantity"
                                        className="form-control input-number"
                                        defaultValue={item.qty}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xs-3">
                                  <h2 className="td-color">
                                    {symbol}
                                    {item.price -
                                      (item.price * item.discount) / 100}
                                  </h2>
                                </div>
                                <div className="col-xs-3">
                                  <h2 className="td-color">
                                    <a
                                      href="#"
                                      className="icon"
                                      onClick={() =>
                                        this.props.removeFromCart(item)
                                      }
                                    >
                                      <i className="icon-close"></i>
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h2>
                                {symbol}
                                {item.price -
                                  (item.price * item.discount) / 100}
                              </h2>
                            </td>
                            <td>
                              <div className="qty-box">
                                <div className="input-group">
                                  <span className="input-group-prepend">
                                    <button
                                      type="button"
                                      className="btn quantity-left-minus"
                                      onClick={() =>
                                        this.props.decrementQty(item.id)
                                      }
                                      data-type="minus"
                                      data-field=""
                                    >
                                      <i className="fa fa-angle-left"></i>
                                    </button>
                                  </span>
                                  <input
                                    type="text"
                                    name="quantity"
                                    value={item.qty}
                                    readOnly={true}
                                    className="form-control input-number"
                                  />

                                  <span className="input-group-prepend">
                                    <button
                                      className="btn quantity-right-plus"
                                      onClick={() =>
                                        this.props.incrementQty(item, 1)
                                      }
                                      data-type="plus"
                                      disabled={
                                        item.qty >= item.stock ? true : false
                                      }
                                    >
                                      <i className="fa fa-angle-right"></i>
                                    </button>
                                  </span>
                                </div>
                              </div>
                              {item.qty >= item.stock ? "out of Stock" : ""}
                            </td>
                            <td>
                              <a
                                href="#"
                                className="icon"
                                onClick={() => this.props.removeFromCart(item)}
                              >
                                <i className="fa fa-times"></i>
                              </a>
                            </td>
                            <td>
                              <h2 className="td-color">
                                {symbol}
                                {item.sum}
                              </h2>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                  <table className="table cart-table table-responsive-md">
                    <tfoot>
                      <tr>
                        <td>total price :</td>
                        <td>
                          <h2>
                            {symbol} {total}{" "}
                          </h2>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="row cart-buttons">
                <div className="col-6">
                  <Link
                    to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                    className="btn btn-solid"
                  >
                    continue shopping
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to={`${process.env.PUBLIC_URL}/checkout`}
                    className="btn btn-solid"
                  >
                    check out
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="cart-section section-b-space">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <div className="col-sm-12 empty-cart-cls text-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`}
                        className="img-fluid mb-4"
                        alt=""
                      />
                      <h3>
                        <strong>Your Cart is Empty</strong>
                      </h3>
                      <h4>Explore more shortlist some items.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cartList.cart,
  symbol: state.data.symbol,
  total: getCartTotal(state.cartList.cart),
});

export default connect(mapStateToProps, {
  removeFromCart,
  incrementQty,
  decrementQty,
})(cartComponent);
