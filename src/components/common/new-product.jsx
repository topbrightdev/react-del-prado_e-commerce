import React, {Component} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getBestSeller} from "../../services";

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      items: null,
    };
  }
  componentWillMount() {}

  componentDidMount() {
    if (this.props.items.length > 0) {
      this.setState(() => {
        return {
          open: true,
          items: this.props.items,
        };
      });
    }
  }

  render() {
    var arrays = [];

    const {symbol} = this.props;
    var items = this.props.items;

    if (this.state.open) {
      if (this.state.items) {
        items = this.state.items;
      }
      while (items.length > 0) {
        arrays.push(items.splice(0, 3));
      }
      return (
        <div className="theme-card">
          <h5 className="title-border">new product</h5>
          <Slider className="offer-slider slide-1">
            {arrays.map((products, index) => (
              <div key={index}>
                {products.map((product, i) => (
                  <div className="media" key={i}>
                    <Link
                      to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
                    >
                      <img
                        className="img-fluid"
                        src={`${product.pictures[0]}`}
                        alt=""
                      />
                    </Link>
                    <div className="media-body align-self-center">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <Link
                        to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
                      >
                        <h6>{product.name}</h6>
                      </Link>
                      <h4>
                        {symbol}
                        {(product.price * product.discount) / 100}
                        <del>
                          <span className="money">
                            {symbol}
                            {product.price}
                          </span>
                        </del>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      );
    } else {
      return <h6>Loading</h6>;
    }
  }
}

function mapStateToProps(state) {
  return {
    items: getBestSeller(state.data.products),
    symbol: state.data.symbol,
  };
}

export default connect(mapStateToProps, null)(NewProduct);
