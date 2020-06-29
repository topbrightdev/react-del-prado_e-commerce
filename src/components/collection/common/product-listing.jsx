import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import {getTotal, getCartProducts} from "../../../reducers";
import {
  addToCart,
  addToWishlist,
  addToCompare,
  addSelectedProducts,
} from "../../../actions/indexO";
import {getVisibleproducts} from "../../../services/index";
import ProductListItem from "./product-list-item";

var category = null;

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      hasMoreItems: true,
      category: null,
      productsToShow: null,
    };
  }

  componentWillMount() {
    if (this.props.category !== this.state.category) {
      category = this.props.category;
      this.setState(() => {
        return {category: category};
      });
      this.fetchSameCategoryProducts();
    }
    var products = null;

    if (this.props.data3.productsToShow.length > 0) {
      products = this.props.data3.productsToShow;
    } else {
      products = this.props.products;
    }

    this.fetchMoreItems(products);
  }

  componentDidUpdate() {
    if (this.props.category !== this.state.category) {
      category = this.props.category;
      this.setState(() => {
        return {category: category};
      });
      this.fetchSameCategoryProducts();
    }
  }

  fetchSameCategoryProducts = () => {
    if (this.props.category !== this.state.category) {
      category = this.props.category;
      this.setState(() => {
        return {category: category};
      });

      var productsToShow = [];
      var products = this.props.products[0];

      if (this.props.products[1].length > 0) {
        products = this.props.products[0];
      }

      products.map((product) => {
        product.categories.map((productCategory) => {
          if (productCategory.name === category) {
            productsToShow.push(product);
          }
        });
      });
    }

    if (this.state.productsToShow !== productsToShow) {
      this.setState(() => {
        return {productsToShow: productsToShow};
      });
      this.props.addSelectedProducts(productsToShow);
    }
    category = this.props.category;
  };

  fetchMoreItems = (products) => {
    if (this.state.limit >= products.length) {
      this.setState({hasMoreItems: false});
      return;
    }
    // a fake async api call
    setTimeout(() => {
      this.setState({
        limit: this.state.limit + 5,
      });
    }, 3000);
  };

  render() {
    const {
      products,
      addToCart,
      symbol,
      addToWishlist,
      addToCompare,
    } = this.props;

    var theProducts = products[0];
    if (this.state.productsToShow) {
      theProducts = this.state.productsToShow;
    }
    if (products[1].length > 0) {
      theProducts = products[1];
    }

    if (category) {
      return (
        <div className="product-wrapper-grid">
          <div className="container-fluid">
            {theProducts.length > 0 ? (
              <InfiniteScroll
                dataLength={this.state.limit} //This is important field to render the next data
                next={() => {
                  this.fetchMoreItems(theProducts);
                }}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loading-cls"></div>}
                endMessage={
                  <p className="seen-cls seen-it-cls">
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div className="row">
                  {theProducts
                    .slice(0, this.state.limit)
                    .map((product, index) => (
                      <div
                        className={`${
                          this.props.colSize === 3
                            ? "col-xl-3 col-md-6  col-grid-box ma-lr"
                            : "col-lg-" + this.props.colSize
                        }`}
                        key={index}
                      >
                        <ProductListItem
                          product={product}
                          symbol={symbol}
                          onAddToCompareClicked={() => addToCompare(product)}
                          onAddToWishlistClicked={() => addToWishlist(product)}
                          onAddToCartClicked={addToCart}
                          key={index}
                        />
                      </div>
                    ))}
                </div>
              </InfiniteScroll>
            ) : (
              <div className="row">
                <div className="col-sm-12 text-center section-b-space mt-5 no-found">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`}
                    className="img-fluid mb-4"
                  />
                  <h3>
                    Sorry! Couldn't find the product you were looking For!!!{" "}
                  </h3>
                  <p>
                    Please check if you have misspelt something or try searching
                    with other words.
                  </p>
                  <Link
                    to={`${process.env.PUBLIC_URL}/`}
                    className="btn btn-solid"
                  >
                    continue shopping
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <h6>Loading</h6>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    products: getVisibleproducts(
      state.data,
      state.filters,
      state.data2,
      state.data3
    ),
    data2: state.data2,
    data3: state.data3,
    symbol: state.data.symbol,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  addToCompare,
  addSelectedProducts,
})(ProductListing);
