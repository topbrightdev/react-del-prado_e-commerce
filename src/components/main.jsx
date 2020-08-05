import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./common/index.scss";
import Slider from "react-slick";
import { withTranslate } from "react-redux-multilingual";

// Import custom components
import Special from "./products/special";

import ElementCategory from "./elements/element-category";

class Vegetables extends Component {
  render() {
    const { translate } = this.props;

    return (
      <div>
        <Helmet>
          <title>{translate("title_web")}</title>
        </Helmet>

        <ElementCategory />
        <section className="p-0 margin-t-10">
          <Slider className="slide-1 home-slider">
            <div>
              <div className="home home11 text-center">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain">
                        <div className="items">
                          <h4>{translate("discount_10")}</h4>
                          <h1>{translate("own_meat")}</h1>
                          <a
                            href={`${
                              process.env.PUBLIC_URL
                            }/left-sidebar/product/2957`}
                            className="btn btn-solid"
                          >
                            {translate("shop_now")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="home home2 text-center">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slider-contain">
                        <div className="items">
                          <h4>{translate("discount_15")}</h4>
                          <h1>{translate("receive_home")}</h1>
                          <a
                            href={`${process.env.PUBLIC_URL}/pages/delivery`}
                            className="btn btn-solid"
                          >
                            {translate("ask_here")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        {/*collection banner layout*/}
        <section className="banner-padding absolute-banner pb-0">
          <div className="container absolute-bg">
            <div className="service p-0">
              <div className="row">
                <div className="col-md-4 service-block">
                  <div className="media mw-100 ipad-block">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/theme/17.png`}
                      className="img-fluid m-lr-10 ipad-no-margin"
                      alt=""
                    />{" "}
                    <div className="media-body">
                      <h4>{translate("home_delivery")}</h4>
                      <p>{translate("more_than_50")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 service-block">
                  <div className="media mw-100 ipad-block">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/theme/14.png`}
                      className="img-fluid m-lr-10 ipad-no-margin"
                      alt=""
                    />{" "}
                    <div className="media-body">
                      <h4>{translate("own_cattle")}</h4>
                      <p>{translate("maximum_quality")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 service-block">
                  <div className="media mw-100 ipad-block">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/theme/13.png`}
                      className="img-fluid m-lr-10 ipad-no-margin"
                      alt=""
                    />
                    <div className="media-body">
                      <h4>{translate("organic_products")}</h4>
                      <p>{translate("traditional_way")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*collection banner layout end*/}

        {/*Parallax banner*/}
        <section className="p-0">
          <div className="full-banner parallax-banner15 parallax text-left p-left">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="banner-contain">
                    <h2>{translate("banner_date")}</h2>
                    <h3>{translate("buy_online")}</h3>
                    <h4>{translate("with_confidence")}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Parallax banner end*/}

        {/*product-box slider*/}
        <Special type={"vegetable"} />
        {/*product-box slider end*/}
      </div>
    );
  }
}

export default withTranslate(Vegetables);
