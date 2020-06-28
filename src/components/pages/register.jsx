import React, {Component} from "react";
import {connect} from "react-redux";
import {removeFromWishlist} from "../../actions/indexO";

import SimpleReactValidator from "simple-react-validator";

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: "stripe",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      country: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    };
    this.validator = new SimpleReactValidator();
  }

  render() {
    return (
      <div>
        <Breadcrumb title={"create account"} />

        {/*Regsiter section*/}
        <section className="register-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>create account</h3>
                <div className="theme-card">
                  <form className="theme-form">
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">First Name</label>
                        <input
                          id="fname"
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required=""
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "first_name",
                          this.state.first_name,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">Last Name</label>
                        <input
                          id="lname"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          required=""
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "last_name",
                          this.state.last_name,
                          "required|alpha"
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">email</label>
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          required=""
                          name="email"
                          value={this.state.email}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "email",
                          this.state.email,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          required=""
                          name="password"
                          value={this.state.password}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "password",
                          this.state.password,
                          "required|alpha"
                        )}
                      </div>{" "}
                    </div>
                    <div className="checkout-title">
                      <h3>Billing Details</h3>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="country ">country </label>
                        <input
                          id="country "
                          type="text"
                          className="form-control"
                          placeholder="Country "
                          required=""
                          name="country "
                          value={this.state.country}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "country ",
                          this.state.country,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">Phone</label>
                        <input
                          id="phone"
                          type="phone"
                          className="form-control"
                          placeholder="Phone"
                          required=""
                          name="phone"
                          value={this.state.phone}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "phone",
                          this.state.phone,
                          "required|alpha"
                        )}
                      </div>{" "}
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="address ">address </label>
                        <input
                          id="address "
                          type="text"
                          className="form-control"
                          placeholder="Address "
                          required=""
                          name="address "
                          value={this.state.address}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "address ",
                          this.state.address,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">City</label>
                        <input
                          id="city"
                          type="text"
                          className="form-control"
                          placeholder="City"
                          required=""
                          name="city"
                          value={this.state.phone}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "city",
                          this.state.city,
                          "required|alpha"
                        )}
                      </div>{" "}
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="state ">state / province </label>
                        <input
                          id="state "
                          type="text"
                          className="form-control"
                          placeholder="State / Province "
                          required=""
                          name="state "
                          value={this.state.state}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "state ",
                          this.state.state,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">Postal</label>
                        <input
                          id="postal"
                          type="number"
                          className="form-control"
                          placeholder="Postal"
                          required=""
                          name="postal"
                          value={this.state.postal}
                          onChange={this.setStateFromInput}
                        />
                        {this.validator.message(
                          "postal",
                          this.state.postal,
                          "required|alpha"
                        )}
                      </div>
                    </div>

                    <a href="#" className="btn btn-solid">
                      create Account
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
