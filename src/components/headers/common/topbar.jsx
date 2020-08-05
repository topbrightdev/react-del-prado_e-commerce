import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslate } from "react-redux-multilingual";
import { connect } from "react-redux";
import { logout } from "../../../actions/indexO";

class TopBar extends Component {
  render() {
    const { translate } = this.props;
    var wishes = null;
    if (this.props.state.wishlist.list.length > 0) {
      wishes = true;
    }

    var name = null;
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
                    <i className="fa fa-phone" aria-hidden="true" />
                    {translate("call_us")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <ul className="header-dropdown">
                <li className="mobile-wishlist compare-mobile">
                  <Link to={`${process.env.PUBLIC_URL}/compare`}>
                    <i className="fa fa-random" aria-hidden="true" />
                    {translate("compare")}
                  </Link>
                </li>
                <li className="mobile-wishlist">
                  <Link to={`${process.env.PUBLIC_URL}/wishlist`}>
                    {!wishes ? (
                      <i className="fa fa-heart" aria-hidden="true" />
                    ) : (
                      <i className=" fa-heart icon-green" aria-hidden="true" />
                    )}
                    {translate("wishlist")}
                  </Link>
                </li>
                <li className="onhover-dropdown mobile-account">
                  <i className={name ? "icon-green fa-user " : "fa fa-user "} />
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
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/`}
                          data-lng="en"
                          onClick={() => {
                            this.props.logout();
                          }}
                        >
                          {translate("logout")}
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

export default connect(
  mapStateToProps,
  { logout }
)(withTranslate(TopBar));
