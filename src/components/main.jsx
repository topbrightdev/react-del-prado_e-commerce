import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./common/index.scss";
import Slider from "react-slick";

// Import custom components
import Special from "./products/special";

import ElementCategory from "./elements/element-category";

class Vegetables extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Del Prado | Comercio Online</title>
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
                          <h4>ahorre 10%</h4>
                          <h1>embutidos propios</h1>
                          <a
                            href={`${
                              process.env.PUBLIC_URL
                            }/left-sidebar/product/2957`}
                            className="btn btn-solid"
                          >
                            shop now
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
                          <h4>descuentos de hasta el 15%</h4>
                          <h1>recibe la compra en tu hogar</h1>
                          <a
                            href={`${process.env.PUBLIC_URL}/pages/delivery`}
                            className="btn btn-solid"
                          >
                            consulte aqui
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
                      <h4>Envio a domicilio</h4>
                      <p>En compras superiores a 50 euros</p>
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
                      <h4>Ganaderia Propia</h4>
                      <p>La maxima garantia y calidad</p>
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
                      <h4>Productos organicos</h4>
                      <p>Cultivado de la manera tradicional</p>
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
                    <h2>2020</h2>
                    <h3>compra online</h3>
                    <h4>con la confianza que da la cercania</h4>
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

export default Vegetables;
