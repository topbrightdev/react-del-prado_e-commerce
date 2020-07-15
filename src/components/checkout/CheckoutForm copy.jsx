import React, { useState } from "react";
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

const CheckoutForm = ({ selectedProduct, stripe, history }) => {
  if (selectedProduct === null) history.push("/");
  const [receiptUrl, setReceiptUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, token } = await stripe.createToken();
    if (error) {
      console.log(error);
    }
    if (token) {
      console.log(token);
    }
    const order = await axios
      .post("http://localhost:9000/stripe", {
        // amount: total.toString().replace(".", ""),
        source: token.id,
        //  receipt_email: email,
        amount: "1000",
        receipt_email: "test@c.com",
      })
      .catch((e) => {
        console.log(e);
      });
    setReceiptUrl(order.data.charge.receipt_url);
    // receiveReceipt(receiptUrl);
  };

  // if (receiptUrl) {
  if (receiptUrl) {
    return (
      <div className="success ">
        <div className=" success-form farm-19">
          <h2 className="success-text">Payment Successful!</h2>
          <div className="success-links">
            <a href={receiptUrl} className="success-receipt links">
              View Receipt
            </a>
            <Link to="/" className="success-home links">
              Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-details">
      <div className="checkout-form farm-19">
        <h6 className="checkout-text">
          Introduce your Credit Card Information
        </h6>
        <p>Amount: </p>

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

export default injectStripe(CheckoutForm);
