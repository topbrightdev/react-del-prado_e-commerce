import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NumberFormat from "react-number-format";
import { withTranslate } from "react-redux-multilingual";

import Breadcrumb from "../breadcrumb";
import { removeFromCompare, addToCart } from "../../actions/indexO";
import Banner from "../elements/element-banner";

class Compare extends Component {
  changeQty = (e) => {
    this.setState({ quantity: parseInt(e.target.value) });
  };

  render() {
    const { translate } = this.props;

    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { Items, addToCart, removeFromCompare } = this.props;

    return (
      <div>
        <Breadcrumb title={"Compare"} />
        {Items.length > 0 ? (
          <section className="compare-section section-b-space">
            <div className="container">
              <Banner />
              <div className="row">
                <div className="col-12">
                  <Slider {...settings} className="slide-4">
                    {Items.map((item, index) => (
                      <div key={index}>
                        <div className="compare-part">
                          <button
                            type="button"
                            className="close-btn"
                            onClick={() => removeFromCompare(item)}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className="img-secton">
                            <Link
                              to={`${
                                process.env.PUBLIC_URL
                              }/left-sidebar/product/${item.id}`}
                            >
                              <img
                                src={
                                  item.variants
                                    ? item.variants[0].images
                                    : item.pictures[0]
                                }
                                className="img-fluid"
                                alt=""
                              />
                              <h5 className="money text-center">{item.name}</h5>
                            </Link>
                            <h5 className="money text-center">
                              <NumberFormat
                                value={item.price}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"€"}
                                renderText={(formattedValue) => (
                                  <span>{formattedValue}</span>
                                )} // <--- Don't forget this!
                              />
                            </h5>
                          </div>
                          <div className="detail-part text-center">
                            <div className="title-detail">
                              <h6>{translate("description")}</h6>
                            </div>
                            <div className="inner-detail">
                              {item.shortDetails ? (
                                <p>{item.shortDetails}</p>
                              ) : (
                                <p>{translate("no_description")}</p>
                              )}
                            </div>
                          </div>
                          <div className="btn-part">
                            <a
                              href="!#"
                              className="btn btn-solid"
                              onClick={() => addToCart(item, 1)}
                            >
                              ={translate("add_cart")}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="cart-section section-b-space">
            <Banner />{" "}
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div>
                    <div className="col-sm-12 empty-cart-cls text-center">
                      <img
                        src={`${
                          process.env.PUBLIC_URL
                        }/assets/images/empty-compare.png`}
                        className="img-fluid mb-4"
                        alt=""
                      />
                      <h3>
                        <strong>{translate("whishList_empty")}</strong>
                      </h3>
                      <h4>{translate("explore")}</h4>
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
  Items: state.compare.items,
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  { removeFromCompare, addToCart }
)(withTranslate(Compare));
