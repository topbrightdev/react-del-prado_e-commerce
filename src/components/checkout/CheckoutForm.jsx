import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";

//4242424242424242

var send = false;
var email,
  total,
  amount = null;

const port = process.env.PORT || 7000;

const urlCharge =
  process.env.NODE_ENV.trim() === "production"
    ? `https://waldenberginc.com/api/stripe/charge`
    : "http://localhost:7000/api/stripe/charge";
//const urlCharge ='http://waldenberginc.com/api/stripe/charge'

const newTo = (data) => {
  return {
    pathname: `${process.env.PUBLIC_URL}/order-success`,
    data: data,
  };
};

const CheckoutForm = ({
  selectedProduct,
  stripe,
  history,
  total,
  email,
  doOrder,
  clientData,
}) => {
  if (selectedProduct === null) history.push("/");
  //onst [receiptUrl, setReceiptUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(total);
    var amount = total * 100;
    amount = amount.toString();
    console.log(amount);
    const { error, token } = await stripe.createToken();
    if (error) {
      console.log(error);
    }
    if (token) {
      console.log(token);
    }
    const order = await axios
      .post("http://localhost:9000/stripe", {
        amount: amount,
        source: token.id,
        receipt_email: email,
      })
      .catch((e) => {
        console.log(e);
      });
    var receiptUrl = "";
    console.log(clientData);
    receiptUrl = order.data;
    //history.push(`${process.env.PUBLIC_URL}/order-success`);
    //this.props.placeOrder(this.createOrderData());
    doOrder(true);
    const data = [receiptUrl, clientData];
    history.push(newTo(data));

    // receiptUrl = order.data.charge.receipt_url;
    //receiveReceipt(receiptUrl);
  };

  // if (receiptUrl) {
  // if (receiptUrl) {
  //  history.push(
  //   `${process.env.PUBLIC_URL}/order-success`
  //  );

  /*const newTo = (receipt) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/order-success`,
      receipt: receipt,
    };
  };
*/
  // if (receiptUrl) {

  return (
    <div className="checkout-details">
      <div className="checkout-form farm-19">
        <h6 className="checkout-text">
          Introduce your Credit Card Information
        </h6>
        <p>Amount: {total} $ </p>

        <div className="checkout-number">
          <label className="checkout-label-number">
            Card details
            <CardNumberElement />
          </label>
        </div>
        <div className="checkout-card-details">
          <label className="checkout-label">
            Expiration date
            <CardExpiryElement />
          </label>

          <label className="checkout-label cvc">
            CVC
            <CardCVCElement />
          </label>
        </div>
      </div>
      <div className="checkout-div-button">
        <button type="button" className="btn-solid btn" onClick={handleSubmit}>
          Pay
        </button>
      </div>
    </div>
  );
};

//export default injectStripe(CheckoutForm);
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(injectStripe(CheckoutForm));
