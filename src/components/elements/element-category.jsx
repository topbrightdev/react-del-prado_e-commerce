import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class ElementCategory extends Component {
  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  render() {
    const { translate } = this.props;
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
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/carnes.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("meat")}>
                      <h2>{translate("meat")}</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/pescado.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("fish")}>
                      <h2>{translate("fish")}</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/bread.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("bread")}>
                      <h2>{translate("bread")}</h2>
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
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/frutasvegetables.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("fruitsvegetables")}>
                      <h2>{translate("fruits_vegetables")}</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/meal.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("meal")}>
                      <h2>{translate("dishes")}</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 border-padding">
                <div className="category-banner">
                  <div>
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/vegetables/pro/wine.jpg`}
                      className="img-fluid blur-up lazyload bg-img"
                      alt=""
                    />
                  </div>
                  <div className="category-box">
                    <Link to={this.newTo("drinks")}>
                      <h2>{translate("drinks")}</h2>
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

export default withTranslate(ElementCategory);
