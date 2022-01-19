import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

import { Product4, Product5 } from "../../services/script";
import { addToCart, addToWishlist, addToCompare } from "../../actions/indexO";
import ProductItem from "../../components/products/product-style-five";

class TopCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {
      items,
      symbol,
      addToCart,
      addToWishlist,
      addToCompare,
      type,
    } = this.props;

    var properties;
    if (type === "kids") {
      properties = Product5;
    } else {
      properties = Product4;
    }

    return (
      <div className="pon-collection">
        {/*Paragraph*/}
        <div className="title1  section-t-space">
          <h2 className="title-inner1">last exhibition</h2>
        </div>
        {/*Paragraph End*/}
        <section className="section-b-space p-t-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <Slider
                  {...properties}
                  className="product-4 product-m no-arrow"
                >
                  {items.map((product, index) => (
                    <div key={index}>
                      <ProductItem
                        product={product}
                        symbol={symbol}
                        onAddToCompareClicked={() => addToCompare(product)}
                        onAddToWishlistClicked={() => addToWishlist(product)}
                        onAddToCartClicked={() => addToCart(product, 1)}
                        key={index}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.data.products,
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  { addToCart, addToWishlist, addToCompare }
)(TopCollection);
