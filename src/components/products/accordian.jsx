import React, { Component } from "react";
import Slider from "react-slick";
import "../common/index.scss";
import { connect } from "react-redux";

// import custom Components
import RelatedProduct from "../common/related-product";
import Breadcrumb from "../common/breadcrumb";
import Price from "./common/product/price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from "../../actions/index";
import ImageZoom from "./common/product/image-zoom";
import SmallImages from "./common/product/small-image";

class Column extends Component {
  constructor() {
    super();
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const {
      symbol,
      item,
      addToCart,
      addToCartUnsafe,
      addToWishlist,
    } = this.props;
    var products = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
    };
    var productsnav = {
      slidesToShow: 3,
      swipeToSlide: true,
      arrows: false,
      dots: false,
      focusOnSelect: true,
    };

    return (
      <div>
        <Breadcrumb title={" Product / " + item.name} />

        {/*Section Start*/}
        {item ? (
          <section>
            <div className="collection-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <Slider
                      {...products}
                      asNavFor={this.state.nav2}
                      ref={(slider) => (this.slider1 = slider)}
                      className="product-right-slick"
                    >
                      {item.variants.map((vari, index) => (
                        <div key={index}>
                          <ImageZoom
                            image={vari.images}
                            className="img-fluid image_zoom_cls-0"
                          />
                        </div>
                      ))}
                    </Slider>
                    <SmallImages
                      item={item}
                      settings={productsnav}
                      navOne={this.state.nav1}
                    />
                  </div>
                  {/* Product Details */}
                  <div className="col-lg-4">
                    <div className="product-right product-description-box">
                      <h2> {item.name} </h2>
                      <div className="rating three-star  mb-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-icon mb-3">
                        <ul className="product-social">
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://plus.google.com/discover"
                              target="_blank"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" target="_blank">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                        <button
                          className="wishlist-btn"
                          onClick={() => addToWishlist(item)}
                        >
                          <i className="fa fa-heart"></i>
                          <span className="title-font">Add To WishList</span>
                        </button>
                      </div>
                      <div className="row product-accordion">
                        <div className="col-sm-12">
                          <div
                            className="accordion theme-accordion"
                            id="accordionExample"
                          >
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    product description
                                  </button>
                                </h5>
                              </div>

                              <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>{item.shortDetails}</p>
                                  <div className="single-product-tables detail-section">
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td>Febric:</td>
                                          <td>Chiffon</td>
                                        </tr>
                                        <tr>
                                          <td>Color:</td>
                                          <td>{item.variants[0].color}</td>
                                        </tr>
                                        <tr>
                                          <td>Avalibility:</td>
                                          <td>InStock</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    details
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <div className="mt-2 text-center">
                                    <iframe
                                      src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                      allow="autoplay; encrypted-media"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    review
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  <p>no reviews yet</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Product Price Details */}
                  <Price
                    symbol={symbol}
                    item={item}
                    navOne={this.state.nav1}
                    addToCartClicked={addToCart}
                    BuynowClicked={addToCartUnsafe}
                  />
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
        {/*Section End*/}

        <section className="tab-product m-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <DetailsTopTabs item={item} />
              </div>
            </div>
          </div>
        </section>
        <RelatedProduct />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.id;
  return {
    item: state.data.products.find((el) => el.id == productId),
    symbol: state.data.symbol,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  addToCartUnsafe,
  addToWishlist,
})(Column);
