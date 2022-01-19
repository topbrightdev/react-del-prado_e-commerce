import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { withTranslate } from "react-redux-multilingual";

import Breadcrumb from "../breadcrumb";
import { getCartTotal } from "../../services";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../actions/indexO";

import Banner from "../elements/element-banner";

class cartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartItems, symbol, total, translate } = this.props;
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
              <Banner />

              <div className="row">
                <div className="col-sm-12">
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">{translate("image")}</th>
                        <th scope="col">{translate("product_name")}</th>
                        <th scope="col">{translate("precio")}</th>
                        <th scope="col">{translate("quantity")}</th>
                        <th scope="col">{translate("action")}</th>
                        <th scope="col">{translate("total")}</th>
                      </tr>
                    </thead>
                    {cartItems.map((item, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td>
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${item.id}`}
                              >
                                <img
                                  className="product-cart-size"
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
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${item.id}`}
                              >
                                <h2 className="cart-item-name">{item.name}</h2>
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
                                  <NumberFormat
                                    value={item.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <h2 className="td-color">
                                        <span>{formattedValue}</span>
                                      </h2>
                                    )} // <--- Don't forget this!
                                  />
                                </div>
                                <div className="col-xs-3">
                                  <h2 className="td-color">
                                    <a
                                      href="!#"
                                      className="icon"
                                      onClick={() =>
                                        this.props.removeFromCart(item)
                                      }
                                    >
                                      <i className="icon-close" />
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h2>
                                {symbol}
                                {item.price}
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
                                        item.qty > 1
                                          ? this.props.decrementQty(item.id)
                                          : this.props.removeFromCart(item)
                                      }
                                      data-type="minus"
                                      data-field=""
                                    >
                                      <i className="fa fa-angle-left" />
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
                                      <i className="fa fa-angle-right" />
                                    </button>
                                  </span>
                                </div>
                              </div>
                              {item.qty >= item.stock ? "out of Stock" : ""}
                            </td>
                            <td>
                              <button
                                className="icon invisible-button"
                                onClick={() => this.props.removeFromCart(item)}
                              >
                                <i className="fa fa-times" />
                              </button>
                            </td>
                            <td>
                              <h2 className="td-color">
                                <NumberFormat
                                  value={item.sum}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"€"}
                                  renderText={(formattedValue) => (
                                    <span>{formattedValue}</span>
                                  )} // <--- Don't forget this!
                                />
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
                        <td>{translate("total_price")}</td>
                        <td>
                          <h2>
                            <NumberFormat
                              value={total}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"€"}
                              renderText={(formattedValue) => (
                                <span>{formattedValue}</span>
                              )} // <--- Don't forget this!
                            />
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
                    {translate("continue_shopping")}
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to={`${process.env.PUBLIC_URL}/checkout`}
                    className="btn btn-solid"
                  >
                    {translate("check_out")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="cart-section section-b-space">
            <div className="container">
              <Banner />
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <div className="col-sm-12 empty-cart-cls text-center">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/icon-empty-cart.png`}
                        className="img-fluid mb-4"
                        alt=""
                      />
                      <h3>
                        <strong> {translate("empty_cart")}</strong>
                      </h3>
                      <h4> {translate("explore")}</h4>
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

export default connect(
  mapStateToProps,
  {
    removeFromCart,
    incrementQty,
    decrementQty,
  }
)(withTranslate(cartComponent));
