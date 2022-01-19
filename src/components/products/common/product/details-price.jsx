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

    return (
      <div className="col-lg-6 rtl-text">
        <div className="product-right">
          <div>Categories / Go / Here</div>
          <div className="product-name-div">
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
          </div>

          <div className="border-product">
            <h6 className="product-title">{translate("product_details")}</h6>
            <p>{item.shortDetails}</p>
          </div>

          <div className="product-description border-product">
            <span className="instock-cls">{this.state.stock}</span>

            <div className="qty-box">
              <div className="input-group">
                <p>{translate("quantity")}</p>
                <input
                  type="number"
                  name="
                  quantity"
                  value={this.state.quantity}
                  onChange={this.changeQty}
                  className="form-control input-number quantity-button"
                />
              </div>
              <button
                className="btn btn-solid"
                onClick={() => addToCartClicked(item, this.state.quantity)}
              >
                {translate("add_cart")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslate(DetailsWithPrice);
