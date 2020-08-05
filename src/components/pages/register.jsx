import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { signup } from "../../actions/indexO";
import Breadcrumb from "../breadcrumb";
import { withTranslate } from "react-redux-multilingual";
import Banner from "../elements/element-banner";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment: "stripe",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      country: "",
      address_1: "",
      city: "",
      state: "",
      postcode: "",
    };

    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props);
    if (this.props.state.user.log.username) {
      alert(this.state.first_name + " you are currently logged in !");
      this.props.history.push("/");
    }
  }

  handleChange = (e) => {
    var value = e.currentTarget.value;

    const name = e.currentTarget.name;
    if (e.currentTarget.name) {
      if (name === "postcode" || name === "phone") {
        this.setState(() => {
          return { [name]: value.replace(/\D/, "") };
        });
      } else {
        this.setState(() => {
          return { [name]: value };
        });
      }
    } else return null;
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.first_name.length > 0 && this.state.password > 0) {
      const {
        username,
        first_name,
        password,
        last_name,
        phone,
        email,
        country,
        address_1,
        city,
        state,
        postcode,
      } = this.state;

      const userData = {
        username: username,
        first_name: first_name,
        password: password,
        last_name: last_name,
        phone: phone,
        email: email,
        country: country,
        address_1: address_1,
        city: city,
        state: state,
        postcode: postcode,
      };
      this.props.signup(userData);
    }
  }
  render() {
    const { translate } = this.props;
    return (
      <div>
        <Breadcrumb title={"create account"} />

        {/*Regsiter section*/}
        <section className="register-page section-b-space">
          <div className="container">
            <Banner />
            <div className="row">
              <div className="col-lg-12">
                <h3>create account {translate("create_account")}</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">{translate("user_name")}</label>
                        <input
                          id="uname"
                          type="text"
                          className="form-control"
                          placeholder="User Name"
                          required=""
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "username",
                          this.state.username,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">{translate("password")}</label>
                        <input
                          id="password"
                          type="password"
                          autoComplete="on"
                          className="form-control"
                          placeholder="Password"
                          required=""
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "password",
                          this.state.password,
                          "required|alpha"
                        )}
                      </div>{" "}
                    </div>

                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">email</label>
                        <input
                          id="email_register"
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          required=""
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "email",
                          this.state.email,
                          "required|alpha"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">{translate("name")}</label>
                        <input
                          id="fname"
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          required=""
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "first_name",
                          this.state.first_name,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">{translate("last_name")}</label>
                        <input
                          id="lname"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          required=""
                          name="last_name"
                          value={this.state.last_name}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "last_name",
                          this.state.last_name,
                          "required|alpha"
                        )}
                      </div>
                    </div>

                    <div className="checkout-title">
                      <h3>Billing Details</h3>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="country ">
                          {" "}
                          {translate("country")}
                        </label>
                        <input
                          id="country"
                          type="text"
                          className="form-control"
                          placeholder="Country"
                          required=""
                          name="country"
                          value={this.state.country}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "country ",
                          this.state.country,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">{translate("phone")}</label>
                        <input
                          id="phone"
                          type="tel"
                          pattern="[0-9]{9}"
                          maxLength="9"
                          className="form-control"
                          required=""
                          name="phone"
                          placeholder="Enter phone number"
                          value={this.state.phone}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "phone",
                          this.state.phone,
                          "required|alpha"
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="address ">
                          {" "}
                          {translate("address")}
                        </label>
                        <input
                          id="address_1"
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          required=""
                          name="address_1"
                          value={this.state.address_1}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "address_1 ",
                          this.state.address_1,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">{translate("city")}</label>
                        <input
                          id="city"
                          type="text"
                          className="form-control"
                          placeholder="City"
                          required=""
                          name="city"
                          value={this.state.city}
                          onChange={this.handleChange}
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
                        <label htmlFor="state ">{translate("state")} </label>
                        <input
                          id="state"
                          type="text"
                          className="form-control"
                          placeholder="State / Province "
                          required
                          name="state"
                          value={this.state.state}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "state ",
                          this.state.state,
                          "required|alpha"
                        )}
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="review">{translate("postal")}</label>
                        <input
                          id="postcode"
                          type="tel"
                          pattern="[0-9]{5}"
                          maxLength="5"
                          className="form-control"
                          placeholder="Postal"
                          required=""
                          name="postcode"
                          value={this.state.postcode}
                          onChange={this.handleChange}
                        />
                        {this.validator.message(
                          "postcode",
                          this.state.postcode,
                          "required|alpha"
                        )}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-solid">
                      {translate("create_account")}
                    </button>
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

//export default Register;

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
  {
    signup,
  }
)(withTranslate(Register));
