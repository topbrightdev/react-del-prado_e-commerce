import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { getSpecialCollection } from "../../services/index";

import {
  addToCart,
  addToWishlist,
  addToCompare,
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../../actions/indexO";
import ProductItem from "./special-product-item";

class Special extends Component {
  render() {
    const {
      product,
      symbol,
      addToCart,
      addToWishlist,
      addToCompare,
      incrementQty,
      decrementQty,
      removeFromCart,
    } = this.props;

    if (product[0]) {
      var ratings = [];
      product.map((p) => {
        let RatingStars = [];

        for (var i = 1; i <= parseInt(p.average_rating); i++) {
          RatingStars.push(<i className="fa fa-star" key={i + 20} />);
        }

        if (RatingStars.length < 4) {
          var leftOff = 4 - RatingStars.length;
          for (i = 0; i <= leftOff; i++) {
            RatingStars.push(<i className="fa fa-star off" key={i} />);
          }
        }
        if (RatingStars.length > 5) {
          RatingStars.pop();
        }

        return ratings.push(RatingStars);
      });

      return (
        <div>
          {/*Paragraph*/}
          <section className="section-b-space addtocart_count">
            <div className="full-box">
              <div className="container mw-90">
                <div className="title4">
                  <h2 className="title-inner4">special products</h2>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="theme-card center-align">
                      <div className="offer-slider">
                        <div className="sec-1">
                          <div className="product-box2">
                            <div className="media ipad-block">
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${product[0].id}`}
                              >
                                <img
                                  className="img-fluid blur-up lazyload special-img "
                                  src={product[0].pictures[0]}
                                  alt=""
                                />
                              </Link>
                              <div className="media-body align-self-center">
                                <div className="rating d-f">
                                  {ratings[0]}
                                  <h6 className="rating-count">
                                    {" "}
                                    (
                                    {product[0].rating_count > 0
                                      ? product[0].rating_count + 1
                                      : product[0].rating_count}
                                    )
                                  </h6>
                                </div>
                                <Link
                                  to={`${
                                    process.env.PUBLIC_URL
                                  }/left-sidebar/product/${product[0].id}`}
                                >
                                  <h6>{product[0].name}</h6>
                                </Link>
                                <h4>
                                  <NumberFormat
                                    value={product[0].price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <span>{formattedValue}</span>
                                    )} // <--- Don't forget this!
                                  />
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="product-box2">
                            <div className="media ipad-block">
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${product[1].id}`}
                              >
                                <img
                                  className="img-fluid blur-up lazyload special-img"
                                  src={product[1].pictures[0]}
                                  alt=""
                                />
                              </Link>
                              <div className="media-body align-self-center">
                                <div className="rating d-f">
                                  {ratings[1]}
                                  <h6 className="rating-count">
                                    {" "}
                                    (
                                    {product[1].rating_count > 0
                                      ? product[1].rating_count + 1
                                      : product[1].rating_count}
                                    )
                                  </h6>
                                </div>
                                <Link
                                  to={`${
                                    process.env.PUBLIC_URL
                                  }/left-sidebar/product/${product[1].id}`}
                                >
                                  <h6>{product[1].name}</h6>
                                </Link>
                                <h4>
                                  <NumberFormat
                                    value={product[1].price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <span>{formattedValue}</span>
                                    )} // <--- Don't forget this!
                                  />
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 center-slider m-t-10">
                    <div className="offer-slider">
                      <div>
                        <ProductItem
                          product={product[2]}
                          symbol={symbol}
                          onAddToCompareClicked={() => addToCompare(product[2])}
                          onAddToWishlistClicked={() =>
                            addToWishlist(product[2])
                          }
                          onAddToCartClicked={() => addToCart(product[2], 1)}
                          onIncrementClicked={() => incrementQty(product[2], 1)}
                          onDecrementClicked={() => decrementQty(product[2].id)}
                          onRemoveFromCart={() => removeFromCart(product[2])}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="theme-card center-align">
                      <div className="offer-slider">
                        <div className="sec-1">
                          <div className="product-box2">
                            <div className="media ipad-block">
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${product[3].id}`}
                              >
                                <img
                                  className="img-fluid blur-up lazyload special-img"
                                  src={product[3].pictures[0]}
                                  alt=""
                                />
                              </Link>
                              <div className="media-body align-self-center">
                                <div className="rating d-f">
                                  {ratings[3]}
                                  <h6 className="rating-count">
                                    {" "}
                                    (
                                    {product[3].rating_count > 0
                                      ? product[3].rating_count + 1
                                      : product[3].rating_count}
                                    )
                                  </h6>
                                </div>
                                <Link
                                  to={`${
                                    process.env.PUBLIC_URL
                                  }/left-sidebar/product/${product[3].id}`}
                                >
                                  <h6>{product[3].name}</h6>
                                </Link>
                                <h4>
                                  <NumberFormat
                                    value={product[3].price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <span>{formattedValue}</span>
                                    )} // <--- Don't forget this!
                                  />
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="product-box2">
                            <div className="media ipad-block">
                              <Link
                                to={`${
                                  process.env.PUBLIC_URL
                                }/left-sidebar/product/${product[4].id}`}
                              >
                                <img
                                  className="img-fluid blur-up lazyload special-img"
                                  src={product[4].pictures[0]}
                                  alt=""
                                />
                              </Link>
                              <div className="media-body align-self-center">
                                <div className="rating d-f">
                                  {ratings[4]}
                                  <h6 className="rating-count">
                                    {" "}
                                    (
                                    {product[4].rating_count > 0
                                      ? product[4].rating_count + 1
                                      : product[4].rating_count}
                                    )
                                  </h6>
                                </div>
                                <Link
                                  to={`${
                                    process.env.PUBLIC_URL
                                  }/left-sidebar/product/${product[4].id}`}
                                >
                                  <h6>{product[4].name}</h6>
                                </Link>
                                <h4>
                                  <NumberFormat
                                    value={product[4].price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                    renderText={(formattedValue) => (
                                      <span>{formattedValue}</span>
                                    )} // <--- Don't forget this!
                                  />
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, Ownprops) => ({
  product: getSpecialCollection(state.data.products, Ownprops.type),
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  {
    addToCart,
    addToWishlist,
    addToCompare,
    incrementQty,
    decrementQty,
    removeFromCart,
  }
)(Special);
