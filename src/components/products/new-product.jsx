import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import NumberFormat from "react-number-format";

import { getBestSeller } from "../../services";

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
        console.log(stateItems);
        // const group = stateItems.splice(0, 3).concat(stateItems.slice(3));
        console.log(stateItems);
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
        console.log(arrays);

        return (
          <div className="theme-card">
            <h5 className="title-border"> {translate("new_product")}</h5>
            <Slider className="offer-slider slide-1" {...settings}>
              {arrays.map((products, index) => {
                var index1 = index + "uno";
                return (
                  <div data-index={index1 + "aa"} key={index1 + "ab"}>
                    {products.map((product, i) => {
                      let RatingStars = [];
                      for (
                        var j = 1;
                        j <= parseInt(product.average_rating);
                        j++
                      ) {
                        RatingStars.push(
                          <i className="fa fa-star" key={j + "starA"} />
                        );
                      }
                      //console.log(RatingStars.length);
                      if (RatingStars.length < 4) {
                        var leftOff = 4 - RatingStars.length;
                        //console.log(leftOff);
                        for (j = 0; j <= leftOff; j++) {
                          RatingStars.push(
                            <i className="fa fa-star off" key={j + "starB"} />
                          );
                        }
                      }
                      if (RatingStars.length > 5) {
                        RatingStars.pop();
                        // console.log(RatingStars);
                      }
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

                            <div className="media-body align-self-center">
                              <h6>{product.name}</h6>

                              <h4>
                                <NumberFormat
                                  value={product.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"€"}
                                  renderText={(formattedValue) =>
                                    formattedValue
                                  } // <--- Don't forget this!
                                />
                              </h4>
                              <div className="rating d-f">
                                {RatingStars}
                                <h6 className="rating-count">
                                  {" "}
                                  (
                                  {product.rating_count > 0
                                    ? product.rating_count + 1
                                    : product.rating_count}
                                  )
                                </h6>
                              </div>
                            </div>
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
