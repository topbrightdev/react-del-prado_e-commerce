import React, {Component} from "react";
import {Link} from "react-router-dom";

import Slider from "react-slick";

import Breadcrumb from "../../common/breadcrumb";
import {Slider6, Slider4} from "../../../services/script";
/**
 *   <a
                      href={`${process.env.PUBLIC_URL}/no-sidebar/collection`}
                      params="carnes"
                    >       </a>
                    
 */

class ElementCategory extends Component {
  newTo = (e) => {
    console.log(e);
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: "carne",
    };
  };

  render() {
    return (
      <div>
        {/*Category Two*/}
        <section className="p-0 ratio2_1">
          <div className="container-fluid">
            <div className="row category-border">
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/carnes.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a
                      href={`${process.env.PUBLIC_URL}/no-sidebar/collection/`}
                    >
                      <h2>carne</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/pescado.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a href="#">
                      <h2>pescado</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/bread.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a href="#">
                      <h2>panaderia</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row category-border">
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/frutasvegetables.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a href="#">
                      <h2>frutas y verduras</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/meal.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a href="#">
                      <h2>platos precocinados</h2>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/vegetables/pro/wine.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <a href="#">
                      <h2>bebidas</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ElementCategory;
