import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { Helmet } from "react-helmet";
import Banner from "../elements/element-banner";
import { login } from "../../actions/indexO";
import Breadcrumb from "../breadcrumb";
import { withTranslate } from "react-redux-multilingual";
import Checkbox from "@material-ui/core/Checkbox";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      checked: false,
    };
    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.state.user.log.username) {
      // alert(this.state.username + " you are currently logged in !");
      this.props.history.push("/");
    }
  }

  handleChange = (e) => {
    const n = e.currentTarget.value;
    const name = e.currentTarget.name;

    if (name === "password") {
      this.setState(() => {
        return { password: n };
      });
    }
    if (name === "name") {
      this.setState(() => {
        return { name: n };
      });
    }

    if (name === undefined) {
      if (this.state.checked === true) {
        this.setState(() => {
          return { checked: false };
        });
      } else {
        this.setState(() => {
          return { checked: true };
        });
      }
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
    const { translate } = this.props;
    return (
      <div>
        {/*SEO Support*/}
        <Helmet>
          <title>{translate("title_web")}</title>
          <meta name="description" content="Del Prado Alimentacion" />
        </Helmet>
        {/*SEO Support End */}
        <Breadcrumb title={"Login"} />

        {/*Login section*/}
        <section className="login-page section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3> {translate("login")}</h3>
                <div className="theme-card">
                  <form className="theme-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        id="fname"
                        className="form-control shutter-in"
                        type="email"
                        placeholder="Email"
                        required=""
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      {this.validator.message(
                        "email",
                        this.state.username,
                        "required|email"
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control shutter-in"
                        placeholder="Password"
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

                    <div className="form-check">
                      <button type="submit" className="btn btn-solid">
                        {translate("login")}
                      </button>
                      <div className="check-group">
                        <Checkbox
                          name="checked"
                          onClick={this.handleChange}
                          checked={this.state.checked}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                        <p>{translate("remember_me")}</p>
                      </div>
                    </div>
                    <div className="forget">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/register`}
                        className=""
                        data-lng="en"
                      >
                        {translate("forget_question")}
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 right-login">
                <h3> {translate("new_customers")}</h3>
                <div className="theme-card authentication-right">
                  <h6 className="title-font">{translate("create_account")}</h6>
                  <p>{translate("create_account_text")}</p>

                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/register`}
                    className="btn btn-solid"
                    data-lng="en"
                  >
                    {translate("create_account")}
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

export default connect(
  mapStateToProps,
  {
    login,
  }
)(withTranslate(Login));
