import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "../common/index.scss";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";

// import custom Components
import Service from "./common/service";
import NewProduct from "./new-product";
import Breadcrumb from "../breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import {
  addToCart,
  addToCartUnsafe,
  addToWishlist,
} from "../../actions/indexO";
import ImageZoom from "./common/product/image-zoom";

class LeftSideBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      nav1: null,
      nav2: null,
    };
  }

  // document.getElementById('idOfElement').classList.add('newClassName');

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  filterClick() {
    document.getElementById("filter").style.left = "-15px";
  }
  backClick() {
    document.getElementById("filter").style.left = "-365px";
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

    const { translate } = this.props;

    if (item) {
      return (
        <div>
          {/*SEO Support*/}
          <Helmet>
            <title>
              {translate("title_web")}| {item.category} | {item.name}
            </title>
            <meta name="description" content="Del Prado Alimentacion" />
          </Helmet>
          {/*SEO Support End */}

          <Breadcrumb parent={"Product"} title={item.name} data={this.props} />

          {/*Section Start*/}
          {item ? (
            <section className="section-b-space">
              <div className="collection-wrapper">
                <div className="container">
                  <div className="top-banner-wrapper2">
                    <button className="invisible-button">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/mega-menu/2.jpeg`}
                        className="img-fluid"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="row">
                    <div className="col-sm-3 collection-filter" id="filter">
                      <div className="collection-mobile-back pl-5">
                        <span onClick={this.backClick} className="filter-back">
                          <i className="fa fa-angle-left" aria-hidden="true" />{" "}
                          {translate("back")}
                        </span>
                      </div>

                      {/* <BrandBlock/> */}
                      <Service />
                      {/*side-bar single product slider start*/}
                      {/** <NewProduct /> */}
                      <NewProduct />
                      {/*side-bar single product slider end*/}
                    </div>
                    <div className="col-lg-9 col-sm-12 col-xs-12">
                      <div className="">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="filter-main-btn mb-2">
                              <span
                                onClick={this.filterClick}
                                className="filter-btn"
                              >
                                <i
                                  className="fa fa-filter"
                                  aria-hidden="true"
                                />{" "}
                                {translate("filter")}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 product-thumbnail p-t-5">
                            <Slider
                              {...products}
                              asNavFor={this.state.nav2}
                              ref={(slider) => (this.slider1 = slider)}
                              className="product-slick"
                            >
                              {item.variants
                                ? item.variants.map((vari, index) => (
                                    <div key={index}>
                                      <ImageZoom image={vari.images} />
                                    </div>
                                  ))
                                : item.pictures.map((vari, index) => (
                                    <div key={index}>
                                      <ImageZoom image={vari} />
                                    </div>
                                  ))}
                            </Slider>
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
                  </div>
                </div>
              </div>
            </section>
          ) : null}
          {/*Section End*/}
        </div>
      );
    } else {
      return (
        <div className="loader-wrapper">
          <div className="loader" />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  var productId = ownProps.match.params.id;
  var item = state.data.products.find((el) => `${el.id}` === productId);

  return {
    item: item,
    symbol: state.data.symbol,
    state,
  };
};

export default connect(
  mapStateToProps,
  {
    addToCart,
    addToCartUnsafe,
    addToWishlist,
  }
)(withTranslate(LeftSideBar));
