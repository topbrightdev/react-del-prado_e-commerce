import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import {login} from "../../actions/indexO";
import Breadcrumb from "../common/breadcrumb";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.state.user.log.username) {
      alert(this.state.username + " you are currently logged in !");
      this.props.history.push("/");
    }
  }

  handleChange = (e) => {
    const n = e.currentTarget.value;
    const name = e.currentTarget.name;
    if (name === "password") {
      this.setState(() => {
        return {password: n};
      });
    } else {
      this.setState(() => {
        return {username: n};
      });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password > 0) {
      const userData = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.login(userData);
    }
  }

  render() {
    return (
      <div>
        <Breadcrumb title={"Login"} />

        {/*Login section*/}
        <section className="login-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Login</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        id="fname"
                        type="text"
                        className="form-control"
                        placeholder="NickName"
                        required=""
                        name="first_name"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      {this.validator.message(
                        "first_name",
                        this.state.username,
                        "required|alpha"
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="review">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        autoComplete="on"
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
                    </div>
                    <button type="submit" className="btn btn-solid">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 right-login">
                <h3>New Customer</h3>
                <div className="theme-card authentication-right">
                  <h6 className="title-font">Create A Account</h6>
                  <p>
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to be able to order from our
                    shop. To start shopping click register.
                  </p>

                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/register`}
                    className="btn btn-solid"
                    data-lng="en"
                  >
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  login,
})(Login);
