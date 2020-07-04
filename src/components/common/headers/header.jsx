import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import {IntlActions} from "react-redux-multilingual";
import Pace from "react-pace-progress";
import {withRouter} from "react-router-dom";

// Import custom components
import store from "../../../store";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "../../../containers/CartContainer";
import TopBar from "./common/topbar";
import LogoImage from "./common/logo";
import {changeCurrency, searchProduct} from "../../../actions/indexO";
import {connect} from "react-redux";

class HeaderTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      productName: "",
      navigateTo: "",
    };
  }

  /*=====================
         Pre loader
         ==========================*/
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.props.data.product_details.length > 0) {
      if (
        this.props.data.product_details.name.toUpperCase() ===
        this.state.productName.toUpperCase()
      ) {
        this.props.history.push(
          `${process.env.PUBLIC_URL}/left-sidebar/product/${this.props.data.product_details.id}`
        );
      }

      //    this.props.history.push(
      //      `${process.env.PUBLIC_URL}/left-sidebar/product/${this.props.data.product_details.id}`
      //    );
    }
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
      } else document.getElementById("sticky").classList.add("fixed");
    } else {
      document.getElementById("sticky").classList.remove("fixed");
    }
  };

  handleChange = (e) => {
    var obj = {};
    obj[e.target.name] = e.target.value;

    this.setState(obj);
  };

  handleSubmit = () => {
    return this.props.searchProduct(this.state.productName);
  };

  changeLanguage(lang) {
    store.dispatch(IntlActions.setLocale(lang));
  }

  openNav() {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  }
  openSearch() {
    document.getElementById("search-overlay").style.display = "block";
  }

  closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
  }

  load = () => {
    this.setState({isLoading: true});
    fetch().then(() => {
      // deal with data fetched
      this.setState({isLoading: false});
    });
  };

  render() {
    return (
      <div>
        <header id="sticky" className="sticky">
          {this.state.isLoading ? <Pace color="#27ae60" /> : null}
          <div className="mobile-fix-option"></div>
          {/*Top Header Component*/}
          <TopBar />

          <div className="container-navbar">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-menu border-section border-top-0">
                  <div className="brand-logo layout2-logo">
                    <LogoImage logo={this.props.logoName} />
                  </div>
                  <div className="container p-l-10">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="main-nav-center">
                          <NavBar />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    <div>
                      <div className="icon-nav">
                        <ul>
                          <li className="onhover-div mobile-search">
                            <div>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`}
                                onClick={this.openSearch}
                                className="img-fluid"
                                alt=""
                              />
                              <i
                                className="fa fa-search"
                                onClick={this.openSearch}
                              ></i>
                            </div>
                          </li>
                          <li className="onhover-div mobile-setting">
                            <div>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`}
                                className="img-fluid"
                                alt=""
                              />
                              <i className="fa fa-cog"></i>
                            </div>
                            <div className="show-div setting">
                              <h6>language</h6>
                              <ul>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() => this.changeLanguage("es")}
                                  >
                                    Spanish
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() => this.changeLanguage("en")}
                                  >
                                    English
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() => this.changeLanguage("fn")}
                                  >
                                    French
                                  </a>{" "}
                                </li>
                              </ul>
                              <h6>currency</h6>
                              <ul className="list-inline">
                                <li>
                                  <a
                                    href={null}
                                    onClick={() =>
                                      this.props.changeCurrency("€")
                                    }
                                  >
                                    euro
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() =>
                                      this.props.changeCurrency("₹")
                                    }
                                  >
                                    rupees
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() =>
                                      this.props.changeCurrency("£")
                                    }
                                  >
                                    pound
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href={null}
                                    onClick={() =>
                                      this.props.changeCurrency("$")
                                    }
                                  >
                                    doller
                                  </a>{" "}
                                </li>
                              </ul>
                            </div>
                          </li>
                          {/*Header Cart Component */}
                          <CartContainer />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="search-overlay" className="search-overlay ">
          <div>
            <span
              className="closebtn"
              onClick={this.closeSearch}
              title="Close Overlay"
            >
              ×
            </span>
            <div className="overlay-content">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="productName"
                          name="productName"
                          placeholder="Search a Product"
                          value={this.state.productName}
                          onChange={this.handleChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                      >
                        <i className="fa fa-search"></i>
                      </button>
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

//export default connect(null, {changeCurrency, searchProduct})(HeaderTwo);
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, {
  changeCurrency,
  searchProduct,
})(withRouter(HeaderTwo));
