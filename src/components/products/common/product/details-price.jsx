import React, { Component } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { withTranslate } from "react-redux-multilingual";

class DetailsWithPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quantity: 1,
      stock: "InStock",
      nav3: null,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.setState({
      nav3: this.slider3,
    });
  }

  minusQty = () => {
    if (this.state.quantity > 1) {
      this.setState({ stock: "InStock" });
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  plusQty = () => {
    if (this.props.item.stock >= this.state.quantity) {
      this.setState({ quantity: this.state.quantity + 1 });
    } else {
      this.setState({ stock: "Out of Stock !" });
    }
  };
  changeQty = (e) => {
    this.setState({ quantity: parseInt(e.target.value) });
  };

  render() {
    const { translate } = this.props;

    const {
      item,
      addToCartClicked,
      BuynowClicked,
      addToWishlistClicked,
    } = this.props;

    let RatingStars = [];
    for (var i = 1; i <= parseInt(item.average_rating); i++) {
      RatingStars.push(<i className="fa fa-star" key={i + 20} />);
    }
    if (RatingStars.length < 4) {
      var leftOff = 4 - RatingStars.length;
      for (i = 0; i <= leftOff; i++) {
        RatingStars.push(<i className="fa fa-star off" key={i} />);
      }
    }
    if (RatingStars.length > 5) {
      RatingStars.pop();
    }

    return (
      <div className="col-lg-6 rtl-text">
        <div className="product-right">
          <h2> {item.name} </h2>
          <h2>
            <NumberFormat
              value={item.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"€"}
              renderText={(formattedValue) => formattedValue} // <--- Don't forget this!
            />
          </h2>
          <div className="rating d-f product-detail-rating">
            {RatingStars}
            <h6 className="rating-count">
              {" "}
              (
              {item.rating_count > 0
                ? item.rating_count + 1
                : item.rating_count}
              )
            </h6>
          </div>

          <div className="product-description border-product">
            <span className="instock-cls">{this.state.stock}</span>
            <h6 className="product-title">{translate("quantity")}</h6>
            <div className="qty-box">
              <div className="input-group">
                <span className="input-group-prepend">
                  <button
                    type="button"
                    className="btn quantity-left-minus"
                    onClick={this.minusQty}
                    data-type="minus"
                    data-field=""
                  >
                    <i className="fa fa-angle-left" />
                  </button>
                </span>
                <input
                  type="text"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.changeQty}
                  className="form-control input-number"
                />
                <span className="input-group-prepend">
                  <button
                    type="button"
                    className="btn quantity-right-plus"
                    onClick={this.plusQty}
                    data-type="plus"
                    data-field=""
                  >
                    <i className="fa fa-angle-right" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="product-buttons">
            <button
              className="btn btn-solid"
              onClick={() => addToCartClicked(item, this.state.quantity)}
            >
              {translate("add_cart")}
            </button>
            <Link
              to={`${process.env.PUBLIC_URL}/cart`}
              className="btn btn-solid"
              onClick={() => BuynowClicked(item, this.state.quantity)}
            >
              {translate("buy_now")}
            </Link>
          </div>
          <div className="border-product">
            <h6 className="product-title">{translate("product_details")}</h6>
            <p>{item.shortDetails}</p>
          </div>
          <div className="border-product">
            <h6 className="product-title">{translate("share_it")}</h6>
            <div className="product-icon">
              <ul className="product-social">
                <li>
                  <a
                    href="https://www.facebook.com/delpradoalimentacion/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
              <button
                className="wishlist-btn"
                onClick={() => addToWishlistClicked(item)}
              >
                <i className="fa fa-heart" />
                <span className="title-font">{translate("add_whislist")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslate(DetailsWithPrice);
