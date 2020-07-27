import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Breadcrumb from "../breadcrumb";
import {
  addToCartAndRemoveWishlist,
  removeFromWishlist,
} from "../../actions/indexO";

class wishList extends Component {
  changeQty = (e) => {
    this.setState({ quantity: parseInt(e.target.value) });
  };

  render() {
    const { Items } = this.props;

    return (
      <div>
        <Breadcrumb title={"Wishlist"} />
        {Items.length > 0 ? (
          <section className="wishlist-section section-b-space">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">availability</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    {Items.map((item, index) => {
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
                                  <p className="td-color">in stock</p>
                                </div>
                                <div className="col-xs-3">
                                  <NumberFormat
                                    value={item.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <h2>
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
                                        this.props.removeFromWishlist(item)
                                      }
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                    <a
                                      href="!#"
                                      className="cart"
                                      onClick={() =>
                                        this.props.addToCartAndRemoveWishlist(
                                          item,
                                          1
                                        )
                                      }
                                    >
                                      <i className="fa fa-shopping-cart" />
                                    </a>
                                  </h2>
                                </div>
                              </div>
                            </td>
                            <td>
                              <NumberFormat
                                value={item.price}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"€"}
                                renderText={(formattedValue) => (
                                  <h2>
                                    <span>{formattedValue}</span>
                                  </h2>
                                )} // <--- Don't forget this!
                              />
                            </td>
                            <td>
                              <h3 className="td-color">in stock</h3>
                            </td>
                            <td>
                              <a
                                href="!#"
                                className="icon"
                                onClick={() =>
                                  this.props.removeFromWishlist(item)
                                }
                              >
                                <i className="fa fa-times" />
                              </a>
                              <a
                                href="!#"
                                className="cart"
                                onClick={() =>
                                  this.props.addToCartAndRemoveWishlist(item, 1)
                                }
                              >
                                <i className="fa fa-shopping-cart" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
              <div className="row wishlist-buttons">
                <div className="col-12">
                  <Link
                    to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                    className="btn btn-solid"
                  >
                    continue shopping
                  </Link>
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
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/empty-wishlist.png`}
                        className="img-fluid mb-4"
                        alt=""
                      />
                      <h3>
                        <strong>WhishList is Empty</strong>
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
  Items: state.wishlist.list,
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  {
    addToCartAndRemoveWishlist,
    removeFromWishlist,
  }
)(wishList);
