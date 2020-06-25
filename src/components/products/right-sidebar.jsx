import React, { Component } from "react";
import Slider from "react-slick";
import "../common/index.scss";
import { connect } from "react-redux";

// import custom Components
import Service from "./common/service";
import BrandBlock from "./common/brand-block";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from "../../actions/index";
import ImageZoom from "./common/product/image-zoom";
import SmallImages from "./common/product/small-image";

class RightSideBar extends Component {
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
          <section className="section-b-space">
            <div className="collection-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-sm-12 col-xs-12">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="filter-main-btn mb-2">
                            <span className="filter-btn">
                              <i
                                className="fa fa-filter"
                                aria-hidden="true"
                              ></i>{" "}
                              filter
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 product-thumbnail">
                          <Slider
                            {...products}
                            asNavFor={this.state.nav2}
                            ref={(slider) => (this.slider1 = slider)}
                            className="product-slick"
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
                        <DetailsWithPrice
                          symbol={symbol}
                          item={item}
                          navOne={this.state.nav1}
                          addToCartClicked={addToCart}
                          BuynowClicked={addToCartUnsafe}
                          addToWishlistClicked={addToWishlist}
                        />
                      </div>
                    </div>
                    <DetailsTopTabs item={item} />
                  </div>
                  <div className="col-sm-3 collection-filter">
                    {/* <BrandBlock/> */}
                    <Service />
                    {/*side-bar single product slider start*/}
                    <NewProduct />
                    {/*side-bar single product slider end*/}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )}
        {/*Section End*/}
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
})(RightSideBar);
