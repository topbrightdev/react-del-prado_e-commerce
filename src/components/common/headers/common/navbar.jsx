import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withTranslate} from "react-redux-multilingual";
import {connect} from "react-redux";

//import { getCategories } from "../../../../services/index";
import {
  addToCart,
  addToWishlist,
  addToCompare,
} from "../../../../actions/indexO";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navClose: {right: "0px"},
    };
  }

  componentWillMount() {
    if (window.innerWidth < 750) {
      this.setState({navClose: {right: "-410px"}});
    }
    if (window.innerWidth < 1199) {
      this.setState({navClose: {right: "-300px"}});
    }
  }

  openNav() {
    console.log("open");
    this.setState({navClose: {right: "0px"}});
  }
  closeNav() {
    this.setState({navClose: {right: "-410px"}});
  }

  onMouseEnterHandler() {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  }

  handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensubmenu"))
      event.target.nextElementSibling.classList.remove("opensubmenu");
    else {
      document.querySelectorAll(".nav-submenu").forEach(function(value) {
        value.classList.remove("opensubmenu");
      });
      document
        .querySelector(".mega-menu-container")
        .classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (
      event.target.parentNode.nextElementSibling.classList.contains(
        "opensubmegamenu"
      )
    )
      event.target.parentNode.nextElementSibling.classList.remove(
        "opensubmegamenu"
      );
    else {
      document.querySelectorAll(".menu-content").forEach(function(value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add(
        "opensubmegamenu"
      );
    }
  };

  render() {
    const {translate} = this.props;
    return (
      <div>
        <div className="main-navbar">
          <div id="mainnav">
            <div className="toggle-nav" onClick={this.openNav.bind(this)}>
              <i className="fa fa-bars sidebar-bar"></i>
            </div>
            <ul className="nav-menu" style={this.state.navClose}>
              <li className="back-btn" onClick={this.closeNav.bind(this)}>
                <div className="mobile-back text-right">
                  <span>Back</span>
                  <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("meat")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/fashion`}>
                      {translate("fashion")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("fish")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                    >
                      {translate("category_left_sidebar")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("bakery")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/left-sidebar/product/1`}
                    >
                      {translate("left_sidebar")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mega-menu">
                <Link
                  to="#"
                  className="dropdown"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("dishes")}
                  <span className="sub-arrow"></span>
                </Link>
                <div className="mega-menu-container">
                  <div className="container">
                    <div className="row">
                      <div className="col mega-box">
                        <div className="link-section">
                          <div className="menu-title">
                            <h5 onClick={(e) => this.handleMegaSubmenu(e)}>
                              {translate("portfolio")}
                              <span className="sub-arrow"></span>
                            </h5>
                          </div>
                          <div className="menu-content">
                            <ul>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/features/portfolio-grid/2`}
                                >
                                  {translate("portfolio_grid_2")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("drinks")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/pages/about-us`}>
                      {translate("about_us")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className="nav-link"
                  onClick={(e) => this.handleSubmenu(e)}
                >
                  {translate("fruits_vegetables")}
                  <span className="sub-arrow"></span>
                </Link>
                <ul className="nav-submenu">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/blog/blog-page`}>
                      {translate("blog_left_sidebar")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  console.log(state);
  return {
    categoryTree: getCategories(state),
    symbol: state.data.symbol,
  };
};
*/
//export default connect(mapStateToProps)(withTranslate(NavBar));
export default withTranslate(NavBar);
