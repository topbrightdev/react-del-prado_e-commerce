import React, { Component } from "react";
import { IntlActions, withTranslate } from "react-redux-multilingual";
import Pace from "react-pace-progress";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Import custom components
import store from "../../store";
import SideBar from "./common/sidebar";
import CartContainer from "./../../containers/CartContainer";
import { logout } from "../../actions/indexO";
import LogoImage from "./common/logo";
import { changeCurrency } from "../../actions/indexO";

import BlankHeart from "../../icons/BlankHeart";
import Member from "../../icons/Member";

import Search from "../../icons/Search";

class HeaderOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      modalOpen: null,
      menuOpen: null,
    };
    this.openRead = this.openRead.bind(this);
    this.closeRead = this.closeRead.bind(this);

    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);

    //this.openAbout = this.openAbout.bind(this);
    // this.closeAbout = this.closeAbout.bind(this);

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }
  /*=====================
         Pre loader
         ==========================*/
  componentDidMount() {
    console.log(this.props);
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);

    this.setState({ open: true });
  }

  componentDidUpdate() {}

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove("fixed");
        if (this.state.modalOpen === true) {
          document.getElementById("sticky").classList.add("fixed");
        }
      } else {
        document.getElementById("sticky").classList.add("fixed");
      }
    } else {
      document.getElementById("sticky").classList.remove("fixed");
      if (this.state.modalOpen === true) {
        document.getElementById("sticky").classList.add("fixed");
      }
    }
  };

  changeLanguage(lang) {
    store.dispatch(IntlActions.setLocale(lang));
  }

  openNav() {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
      document.getElementById("sticky").classList.add("fixed");
    }
  }
  closeNav() {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  }

  openSearch() {
    this.closeModal();
    document.getElementById("search-overlay").style.display = "block";
    document.getElementById("sticky").classList.add("fixed");
    this.setState(() => {
      return { modalOpen: true };
    });
  }

  closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
    this.setState(() => {
      return { modalOpen: false };
    });
  }

  openRead() {
    this.setState(() => {
      return { menuOpen: true, modalOpen: true };
    });
  }

  closeRead() {
    this.setState(() => {
      return { menuOpen: false };
    });
  }

  openInspiration() {
    this.setState(() => {
      return { menu1Open: true };
    });
  }

  openAbout() {
    this.setState(() => {
      return { menu1Open: true };
    });
  }

  openTutorial() {
    this.setState(() => {
      return { menu1Open: true };
    });
  }

  openMenu() {
    this.setState(() => {
      return { menu1Open: true };
    });
  }

  closeMenu() {
    this.setState(() => {
      return { menu1Open: false };
    });
  }

  closeModal() {
    //  this.closeNav();
    document.getElementById("search-overlay").style.display = "none";
    this.setState(() => {
      return { menuOpen: false, menu2Open: false, modalOpen: false };
    });
  }

  load = () => {
    this.setState({ isLoading: true });
    fetch().then(() => {
      // deal with data fetched
      this.setState({ isLoading: false });
    });
  };

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
      <div>
        <header id="sticky" className="sticky">
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option" />
          {/*Top Header Component*/}

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="navbar">
                      <div className="brand-logo-pon">
                        <LogoImage logo={this.props.logoName} />{" "}
                        <div className="bar-style" />
                        <p>certains détails</p>
                      </div>
                      {/*SideBar Navigation Component*/}
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    {/*Top Navigation Bar Component*/}
                    {/* <NavBar /> */}

                    <div>
                      <div className="icon-nav">
                        <ul>
                          <li className="onhover-div mobile-search">
                            <div>
                              {" "}
                              <button
                                className="invisible-button"
                                onClick={this.openRead}
                              >
                                <h3 className="text-button">Shop</h3>
                              </button>
                            </div>
                          </li>
                          <li className="onhover-div mobile-search">
                            <div>
                              <button
                                className="invisible-button"
                                onClick={this.openRead}
                              >
                                <h3 className="text-button">Read</h3>
                              </button>
                            </div>
                          </li>

                          {/*Header Search Component */}
                          <li className="onhover-div mobile-search">
                            <button
                              className="invisible-button"
                              onClick={this.openSearch}
                            >
                              <Search />
                            </button>
                          </li>

                          {/*Header Cart Component */}
                          <CartContainer />

                          {/*Header WishList Component */}
                          <li className="mobile-wishlist">
                            <Link to={`${process.env.PUBLIC_URL}/wishlist`}>
                              {!wishes ? (
                                <BlankHeart />
                              ) : (
                                <i
                                  className=" fa-heart icon-green"
                                  aria-hidden="true"
                                />
                              )}
                            </Link>
                          </li>

                          {/*Header Member Component */}
                          <li className="onhover-dropdown mobile-account">
                            {name ? <Member /> : <Member />}
                            {name ? (
                              <ul className="onhover-show-div">
                                <li>
                                  <Link
                                    to={`${
                                      process.env.PUBLIC_URL
                                    }/pages/account`}
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
                                    to={`${
                                      process.env.PUBLIC_URL
                                    }/pages/register`}
                                    data-lng="en"
                                  >
                                    Register
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </li>

                          <li className="onhover-div mobile-setting ">
                            <div className="nav-button-menu">
                              {this.state.modalOpen ? (
                                <div className="close-button-div">
                                  <button
                                    className="invisible-button close-button "
                                    onClick={this.closeModal}
                                    title="Close Overlay"
                                  >
                                    ×
                                  </button>
                                  {/*SideBar Navigation Component*/}
                                  <SideBar />
                                </div>
                              ) : (
                                <div className="navbar">
                                  <button
                                    className="invisible-button close-button "
                                    onClick={this.openNav}
                                    title="Open Menu"
                                  >
                                    <img
                                      src={`${
                                        process.env.PUBLIC_URL
                                      }/assets/images/icon/menu.png`}
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </button>
                                </div>
                              )}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="search-overlay" className="search-overlay">
          <div className="close-button">
            <div className="overlay-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Search a Product"
                        />{" "}
                        <button type="submit" className="btn btn-primary">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
  { changeCurrency, logout }
)(withTranslate(HeaderOne));
