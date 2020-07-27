import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { updateAccount } from "../../actions/indexO";
import Breadcrumb from "../breadcrumb";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payment: "stripe",
      id: "",
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

  componentWillMount() {
    console.log(this.props);
    console.log(this.props.state.user.log);

    if (this.props.state.user.log.username) {
      // alert(this.state.first_name + " you are currently logged in !");
      this.fillFields();
    } else {
      alert(this.state.first_name + " your account has been updated !");

      this.props.history.push("/");
    }
  }
  /**
 * 
 *  componentDidUpdate() {
    console.log(this.props);
    console.log(this.props.state.user.log);

    if (this.props.state.user.log.username) {
      alert(this.state.first_name + " you are currently logged in !");
      this.fillFields();
    } else {
      this.props.history.push("/");
    }
  } 
 * 
 */

  componentWillReceiveProps() {
    console.log(this.props);
    this.props.history.push("/");
  }

  fillFields() {
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
      userId,
    } = this.props.state.user.log;
    console.log(this.props.state.user.log);
    this.setState(() => {
      return {
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
        id: userId,
      };
    });
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
    console.log(event);
    event.preventDefault();
    if (this.state.first_name.length > 0) {
      const {
        id,
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
      //id, updatedUser, updatedShipping
      const userData = {
        id: id,
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
      const userOldData = this.props.state.user.log;
      console.log(userOldData, userData);
      this.props.updateAccount(userData, userOldData);
    }
  }
  render() {
    return (
      <div>
        <Breadcrumb title={"Update Account Parameters"} />

        {/*Regsiter section*/}
        <section className="register-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Updata Account Parameters</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="email">User Name</label>
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
                        <label htmlFor="email2">email</label>
                        <input
                          id="email2"
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

                    <div className="form-row" />
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
                          onChange={this.handleChange}
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
                        <label htmlFor="country ">country </label>
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
                        <label htmlFor="review">Phone</label>
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
                        <label htmlFor="address ">address </label>
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
                        <label htmlFor="review">City</label>
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
                        <label htmlFor="state ">state / province </label>
                        <input
                          id="state"
                          type="text"
                          className="form-control"
                          placeholder="State / Province "
                          required=""
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
                        <label htmlFor="review">Postal</label>
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
                          "postal",
                          this.state.postcode,
                          "required|alpha"
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-solid"
                      onClick={this.handleSubmit}
                    >
                      Update Account
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
    updateAccount,
  }
)(Account);
