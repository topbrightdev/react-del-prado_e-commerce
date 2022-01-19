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
import SmallImages from "./common/product/small-image";

class LeftSideBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      nav1: null,
      nav2: null,
      item: null,
    };
  }

  // document.getElementById('idOfElement').classList.add('newClassName');

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
    if (this.props.item) {
      if (this.props.item !== undefined) {
        if (this.props.item !== this.state.item) {
          this.setState(() => {
            return {
              item: this.props.item,
            };
          });
        }
      }
    }
  }

  componentDidUpdate() {
    if (this.props.item) {
      if (this.props.item !== undefined) {
        if (this.props.item !== this.state.item) {
          this.setState(() => {
            return {
              nav1: this.slider1,
              nav2: this.slider2,
              item: this.props.item,
            };
          });
        }
      }
    }
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

      addToCart,
      addToCartUnsafe,
      addToWishlist,
    } = this.props;
    var item = this.props.item;

    if (item) {
      if (item !== undefined) {
        if (item !== this.state.item) {
        }
      }
    }
    if (!item || item !== undefined) {
      item = this.state.item;
    }

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

    const { translate } = this.props;
    if (item) {
      return (
        <div>
          {/*Section Start*/}

          <div>
            {/*SEO Support*/}
            <Helmet>
              <title>
                {translate("title_web")}| {item.category} | {item.name}
              </title>
              <meta name="description" content="Del Prado Alimentacion" />
            </Helmet>
            {/*SEO Support End */}

            <Breadcrumb
              parent={"Product"}
              title={item.name}
              data={this.props}
            />

            <section className="">
              <div className="collection-wrapper">
                <div className="container">
                  <div className="row left-sidebar-block">
                    <div className="col-sm-3 collection-filter" id="filter">
                      {/* leftside-pictures start */}
                      <div className="pictures-left">
                        {item.variants
                          ? item.variants.map((vari, index) => (
                              <div key={index}>
                                <img
                                  src={`${vari.images}`}
                                  key={index}
                                  alt=""
                                  className="img-left"
                                />
                              </div>
                            ))
                          : item.pictures.map((vari, index) => (
                              <div key={index}>
                                <img
                                  src={`${vari}`}
                                  key={index}
                                  alt=""
                                  className="img-left"
                                />
                              </div>
                            ))}
                      </div>

                      {/* leftside-pictures end */}
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
                          <div className="col-lg-6 product-thumbnail">
                            <Slider
                              {...products}
                              asNavFor={this.state.nav2}
                              ref={(slider) => (this.slider1 = slider)}
                              className="product-slick"
                            >
                              <div>
                                <ImageZoom image={item.pictures[0]} />
                              </div>
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
                    </div>
                  </div>
                </div>
              </div>
              {/** <NewProduct /> */}
              <NewProduct />
            </section>
          </div>

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
  var productId = parseInt(ownProps.match.params.id);
  var item = null;

  //var item = state.data.products.find((el) => el.id === productId);
  state.data.products.map((p) => {
    if (p.id === productId) {
      item = p;
      return item;
    }
  });
  var test = item;
  if (!test) {
    test = state.data.products.find((el) => el.id === productId);
    item = test;
  }

  if (item) {
    return {
      item: item,
      symbol: state.data.symbol,
      state,
    };
  } else {
    return {
      item: null,
      symbol: state.data.symbol,
      state,
    };
  }
};

export default connect(
  mapStateToProps,
  {
    addToCart,
    addToCartUnsafe,
    addToWishlist,
  }
)(withTranslate(LeftSideBar));
