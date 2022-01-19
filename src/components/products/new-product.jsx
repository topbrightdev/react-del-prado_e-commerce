import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      items: [],
    };
  }
  componentDidUpdate() {
    if (this.props.items.length > 0) {
      if (this.props.items !== this.state.items) {
        this.setState(() => {
          return {
            open: true,
            items: this.props.items,
          };
        });
      }
    }
  }

  componentDidMount() {
    if (this.props.items.length > 0) {
      if (this.props.items !== this.state.items) {
        this.setState(() => {
          return {
            open: true,
            items: this.props.items,
          };
        });
      }
    }
  }

  SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  render() {
    var arrays = [];
    const { translate } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
    };

    const { symbol } = this.props;
    const stateItems = [...this.state.items];

    if (this.state.open) {
      while (this.state.items.length > 0) {
        // const group = stateItems.splice(0, 3).concat(stateItems.slice(3));
        // arrays.push(group);
        var counter = 1;
        var group = [];
        this.state.items.map((item) => {
          group.push(item);
          if (group.length === 3) {
            arrays.push(group);
            group = [];
          }
          counter++;
        });

        return (
          <div className="theme-card-pon">
            <Slider className="offer-slider slide-1" {...settings}>
              {arrays.map((products, index) => {
                var index1 = index + "uno";
                return (
                  <div
                    data-index={index1 + "aa"}
                    key={index1 + "ab"}
                    className="slide-pon"
                  >
                    {products.map((product, i) => {
                      return (
                        <div
                          data-index={i + "BA"}
                          className="media"
                          key={i + "BB"}
                        >
                          <Link
                            to={`${
                              process.env.PUBLIC_URL
                            }/left-sidebar/product/${product.id}`}
                            className="new-product-box"
                          >
                            <img
                              className="img-fluid new-product-img"
                              src={`${product.pictures[0]}`}
                              alt=""
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Slider>
          </div>
        );
      }
    } else {
      return <h6>{translate("loading")}</h6>;
    }
  }
}

function mapStateToProps(state) {
  return {
    items: state.data.products,
    symbol: state.data.symbol,
  };
}

export default connect(mapStateToProps)(withTranslate(NewProduct));
