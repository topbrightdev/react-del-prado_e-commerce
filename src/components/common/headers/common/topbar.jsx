import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";
import {connect} from "react-redux";

class TopBar extends Component {
  render() {
    const {translate} = this.props;
    var name = null;
    const log = this.props.state.user.log;
    if (this.props.state.user.log) {
      if (this.props.state.user.log.username) {
        name = this.props.state.user.log.username;
      }
    }
    return (
      <div className="top-header">
        <div className="container-topbar">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-contact">
                <ul>
                  <li>Del Prado Alimentacion</li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    {translate("call_us")}: 985 45 33 22
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <ul className="header-dropdown">
                <li className="mobile-wishlist compare-mobile">
                  <Link to={`${process.env.PUBLIC_URL}/compare`}>
                    <i className="fa fa-random" aria-hidden="true"></i>
                    {translate("compare")}
                  </Link>
                </li>
                <li className="mobile-wishlist">
                  <Link to={`${process.env.PUBLIC_URL}/wishlist`}>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    {translate("wishlist")}
                  </Link>
                </li>
                <li className="onhover-dropdown mobile-account">
                  <i className={name ? "fa fa-user " : "fa fa-user "}></i>
                  {name ? `${name}` : translate("my_account")}

                  {name ? (
                    <ul className="onhover-show-div">
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/account`}
                          data-lng="en"
                        >
                          {translate("my_account")}
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="onhover-show-div">
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/login`}
                          data-lng="en"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/register`}
                          data-lng="en"
                        >
                          Register
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default withTranslate(TopBar);
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(withTranslate(TopBar));
