import React, {Component} from "react";
import {Link} from "react-router-dom";

class ElementCategory extends Component {
  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
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
                    <Link to={this.newTo("Meat")}>
                      <h2>carne</h2>
                    </Link>
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
                    <Link to={this.newTo("Fish")}>
                      <h2>pescado</h2>
                    </Link>
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
                    <Link to={this.newTo("Bread")}>
                      <h2>panaderia</h2>
                    </Link>
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
                    <Link to={this.newTo("FruitsVegetables")}>
                      <h2>frutas y verduras</h2>
                    </Link>
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
                    <Link to={this.newTo("Meal")}>
                      <h2>platos precocinados</h2>
                    </Link>
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
                    <Link to={this.newTo("Drinks")}>
                      <h2>bebidas</h2>
                    </Link>
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
